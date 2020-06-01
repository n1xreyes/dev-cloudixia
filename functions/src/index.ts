import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as aws from 'aws-sdk';

admin.initializeApp();

const env = functions.config();
aws.config.update({
    credentials: new aws.Credentials('AKIAZNTXP4OZFLTS4WSP', 'GeLVlYFjSPhJ5prvMJCSapEhCrTo1gcxQ69T3kEH')
});
const AWS = new aws.S3()
const fs = admin.firestore()

import algoliasearch from 'algoliasearch';

const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('dev_LISTINGS');

exports.approvePending = functions.https.onCall(async (data, context) => {
        if (!data || !data.listing) return;  // World blows up

        const listingPayload = Object.assign({}, data.listing);

        // Only admins have access to make it this far - regular users are NOT alowed
        // to change the state of a pending listing, as per FireBase rules
        delete listingPayload.state;

        const listingId = listingPayload.uid;
        const batch = fs.batch();
        
        // Actual Objects
        const listing = fs.doc('listings/' + listingId);
        batch.set(listing, listingPayload);

        const pending = fs.doc('pendingListings/' + listingId);
        batch.delete(pending)

        // Reference IDs
        const listingRef = fs.doc('userProfiles/' + listingPayload.userId)
        batch.update(listingRef, 
            { listings: admin.firestore.FieldValue.arrayUnion(listingId) });
        
        const pendingRef = fs.doc('users/' + listingPayload.userId)
        batch.update(pendingRef, 
            { pendingListings: admin.firestore.FieldValue.arrayRemove(listingId) });

        // After FireBase updates, save the Listing in Algolia
        return batch.commit().then(() => {
            return index.saveObject({
            objectID: listingId,
            ...listingPayload
        }).then( payload => { console.log ('did a thingy: ', payload)}) });
    });


exports.deleteListing= functions.firestore
    .document('/listings/{listingId}')
    .onDelete((snap, context) => {
        // Get the Listing Data
        const data = snap.data()
        if (!data) return;

        // delete file from AWS
        if (data.photoUrl) {
            // extract file key from photoURL
            const foundIndex = data.photoUrl.search(data.userId);
            const fileKey = data.photoUrl.substring(foundIndex);
            deleteFileFromAws(fileKey, function(err: any) {
                if (err) { return err }
            });
        }

        // Remove from Algolia
        return index.deleteObject(context.params.listingId);
})

exports.updateListing = functions.firestore
    .document('/listings/{listingId}')
    .onUpdate((snap, context) => {
        const data = snap.after.data()
        const objectID = context.params.listingId;

        // Update in Algolia
        return index.saveObject({
            objectID,
            ...data
        })
    })

exports.createNewChat = functions.https.onCall(async (data, context) => {
    if (!context.auth?.uid) {
        throw new functions.https.HttpsError('permission-denied', 'Not Allowed Access To This Resource.');
    }

    const message = {
        sender: context.auth.uid,
        message: data.message,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    }

    // Grab the users
    const sender = "" + context.auth.uid
    const receiver = "" + data.receiverId

    // Generate Firebase ID
    const newChatId = fs.collection('/userChats/').doc().id

    // Save the reference IDs & timestamp to the User's chats list
    const userChatObject = {
        "chatId": newChatId,
        ...message
    }

    const batch = fs.batch();
        
    // Actual Objects
    const receiverRef = fs.doc('/userChats/' + receiver + '/chats/' + sender);
    batch.set(receiverRef, userChatObject);

    const senderRef = fs.doc('/userChats/' + sender + '/chats/' + receiver);
    batch.set(senderRef, userChatObject);

    // Reference IDs
    const newMessageRef = fs.collection('/chatMessages/' + newChatId + "/chats/").doc();
    batch.set(newMessageRef, message);

    await batch.commit().then( 
        payload => console.log('Created chat: ', payload), 
        error => console.log('error: ', error)
    );

    return { message: "message sent."}
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


exports.createNewUser = functions.https.onCall(async (data, context) => {
    const batch = fs.batch();

    const userRef = fs.doc('/users/' + data.user.uid);
    batch.set(userRef, data.user);

    const userProfileRef = fs.doc('/userProfiles/' + data.user.uid);
    batch.set(userProfileRef, data.userProfile);

    return batch.commit().then(
        payload => console.log('Created chat: ', payload),
        error => console.log('error: ', error)
    );
})

exports.createNewSellerUser = functions.https.onCall(async (data, context) => {
	const batch = fs.batch();

	const userRef = fs.doc('/users/' + data.user.uid);
	batch.set(userRef, data.user);

	const userProfileRef = fs.doc('/userProfiles/' + data.user.uid);
	batch.set(userProfileRef, data.userProfile);

	const sellerRef = fs.doc('/sellers/' + data.user.uid);
	batch.set(sellerRef, {isSeller: true});

	return batch.commit().then(
			payload => console.log('Created chat: ', payload),
			error => console.log('error: ', error)
	);
})
