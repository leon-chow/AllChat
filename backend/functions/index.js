// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
var moment = require('moment');

const Messages = require('./messagesAPI');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Messages API
exports.addMessage = Messages.addMessage;
exports.getMessages = Messages.getMessages;

