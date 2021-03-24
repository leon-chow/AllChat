const moment = require('moment');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
// put messages
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const message = req.query.message;
  const username = req.query.username;
  const channel = req.query.channel.toLocaleLowerCase();
  // Push the new message into Firestore using the Firebase Admin SDK.
  var t = moment().valueOf();
  const writeResult = await admin.firestore().collection('channels').doc(channel).collection('messages').add({username: username, message: message, timePosted: t});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

// get messages 
// TODO: later add ability to get multiple channels
exports.getMessages = functions.https.onRequest(async (req, res) => {
  const readResult = await admin.firestore().collection('channels').doc('general').collection('messages').get();
  var messages = [];
  readResult.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
    messages.push({"id": doc.id, "message": doc.data().message, "username": doc.data().username, "timePosted": doc.data().timePosted});
  });
  messages.sort(function (a, b) {
    return a.timePosted - b.timePosted;
  }); 
  res.json(messages);
});