import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const env = functions.config();
const db = admin.database()

import algoliasearch from 'algoliasearch';


const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('dev_LISTINGS');

exports.addListing = functions.database
    .ref('/listings/{listingId}')
    .onCreate((snap, context) => {
        const data = snap.val();
        const objectID = context.params.listingId;

        return index.saveObject({
            objectID,
            ...data
        })
    })

exports.deleteListing = functions.database
    .ref('/listings/{listingId}')
    .onDelete((snap, context) => {
        return index.deleteObject(context.params.listingId)
    })

exports.updateListing = functions.database
    .ref('/listings/{listingId}')
    .onUpdate((snap, context) => {
        const data = snap.after.val();
        const objectID = context.params.listingId;

        return index.saveObject({
            objectID,
            ...data
        })

    })

// Listen for changes in all documents in the 'pendingListings' collection
exports.approvePending = functions.database
    .ref('/pendingListings/{listingId}')
    .onUpdate((change, context) => {

        const data = change.after.val();

        // Regular updates are fine, we are not ready to post publicly
        if (data.state !== 'ACTIVE') {
            return;
        }
        
        // Only admins have access to make it this far - regular users are NOT alowed
        // to change the state of a pending listing
        delete data.state;

        // Move the listing to "listings" from "pendingListings" by copy & delete
        return db.ref('/listings/' + context.params.listingId).set(data, () => change.after.ref.remove() );
});