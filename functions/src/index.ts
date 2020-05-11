import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const env = functions.config();
const db = admin.database()

import algoliasearch from 'algoliasearch';

const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('dev_LISTINGS');

exports.deleteListing = functions.database
    .ref('/listings/{listingId}')
    .onDelete((snap, context) => {

        // Get the Listing Data
        const data = snap.val();

        // Remove the reference from the user
        const dbLocation = '/users/' + data.userId + '/userProfile/listings/' + context.params.listingId
        // Remove from Algolia after reference delete
        return db.ref(dbLocation).set(null, () => index.deleteObject(context.params.listingId));
    })

exports.updateListing = functions.database
    .ref('/listings/{listingId}')
    .onUpdate((snap, context) => {
        const data = snap.after.val();
        const objectID = context.params.listingId;

        // Update in Algolia
        return index.saveObject({
            objectID,
            ...data
        })
    })

exports.approvePending = functions.database
    .ref('/pendingListings/{listingId}')
    .onUpdate((change, context) => {

        const data = change.after.val();

        // Regular updates are fine, we are not ready to post publicly
        if (data.state !== 'ACTIVE') {
            return;
        }
        
        // Only admins have access to make it this far - regular users are NOT alowed
        // to change the state of a pending listing, as per FireBase rules
        delete data.state;

        const objectID = context.params.listingId;

        // Move the listing to "listings" from "pendingListings" by copy & delete
        const updates :any = {};
        
        // Actual Objects
        updates['/listings/' + objectID] = data
        updates['/pendingListings/' + objectID] = null

        // Reference IDs
        updates['/users/' + data.userId + '/userProfile/listings/' + objectID] = true
        updates['/users/' + data.userId + '/pendingListings/' + objectID] = null

        // After FireBase updates, save the Listing in Algolia
        return db.ref().update(updates, () => index.saveObject({
            objectID,
            ...data
        }))
});

exports.addPending = functions.database
    .ref('/pendingListings/{listingId}')
    .onCreate((snap, context) => {

        // Get the Listing Data
        const data = snap.val();

        const dbLocation = '/users/' + data.userId + '/pendingListings/' + context.params.listingId

        // Move the listing to "listings" from "pendingListings" by copy & delete
        return db.ref(dbLocation).set(true);
});

exports.deletePending = functions.database
    .ref('/pendingListings/{listingId}')
    .onDelete((snap, context) => {
        
        // Get the Listing Data
        const data = snap.val();

        const dbLocation = '/users/' + data.userId + '/pendingListings/' + context.params.listingId

        return db.ref(dbLocation).set(null);
    })