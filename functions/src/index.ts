import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as aws from 'aws-sdk';

admin.initializeApp();

const env = functions.config();
const db = admin.database()
aws.config.update({
    credentials: new aws.Credentials('AKIAZNTXP4OZFLTS4WSP', 'GeLVlYFjSPhJ5prvMJCSapEhCrTo1gcxQ69T3kEH')
});
const AWS = new aws.S3()

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

        // delete file from AWS
        if (data.photoUrl) {
            // extract file key from photoURL
            const foundIndex = data.photoUrl.search(data.userId);
            const fileKey = data.photoUrl.substring(foundIndex);
            deleteFileFromAws(fileKey, function(err: any) {
                if (err) { return err }
            });
        }

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
        const updates: any = {};

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
    .onDelete(async(snap, context) => {
        // Get the Listing Data
        const data = snap.val();

        const dbLocation = '/users/' + data.userId + '/pendingListings/' + context.params.listingId
        const dbLocationForPhotoDelete = '/users/' + data.userId + '/userProfile/listings/' + context.params.listingId

        let isFound;
        await db.ref(dbLocationForPhotoDelete).once('value', function(snapshot) {
            isFound = snapshot.val() == true;
        });

        // delete file from AWS
        if (data.photoUrl.includes("amazonaws") && !isFound) {
            // extract file key from photoURL
            const foundIndex = data.photoUrl.search(data.userId);
            const fileKey = data.photoUrl.substring(foundIndex);
            deleteFileFromAws(fileKey, function (err: any) {
                if (err) {
                    return err
                }
            });
        }

        return db.ref(dbLocation).set(null);
    })

exports.createNewChat = functions.https.onCall(async (data, context) => {
    if (!context.auth?.uid) {
        throw new functions.https.HttpsError('permission-denied', 'Not Allowed Access To This Resource.');
    }

    const message = {
        sender: context.auth.uid,
        message: data.message,
        timestamp: data.timestamp
    }

    // Grab the users
    const sender = "" + context.auth.uid
    const receiver = "" + data.receiverId

    // Generate Firebase ID
    const newChatId = db.ref().push().key

    // Save the reference IDs & timestamp to the User's chats list
    const userChatObject = {
        "chatId": newChatId,
        "lastMessage": message
    }

    // Reference IDs
    const updates: any = {};
    updates['/userChats/' + receiver + '/' + sender] = userChatObject;
    updates['/userChats/' + sender + '/' + receiver] = userChatObject;
    updates['/chatMessages/' + newChatId + "/" + db.ref().push().key] = message

    await db.ref().update(updates).then().catch(error => {
        console.log('Error: ', error)
    })

    return { message: "Chat created." }
});

function deleteFileFromAws(filename: string, callback: any) {
    const params = {
        Bucket: 'cloudixia-images',
        Key: filename
    };

    AWS.deleteObject(params, function(err: any, data: any) {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            callback(null);
        }
    });
}
