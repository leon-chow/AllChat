// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
// put messages
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  console.log(req.query);
  const message = req.query.message;
  const username = req.query.username;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection('messages').add({username: username, message: message});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

// get messages
exports.getMessages = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('messages').get();
  var messages = [];
  readResult.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    messages.push({"id": doc.id, "message": doc.data().message, "username": doc.data().username});
  });
  console.log(messages);
  res.json(messages);
});