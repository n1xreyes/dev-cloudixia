import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const env = functions.config();

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