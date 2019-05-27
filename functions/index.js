const functions = require("firebase-functions");
const express = require("express");
const { sapper } = require("./__sapper__/build/server/server");
const app = express().use(sapper.middleware());

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.ssr = functions.https.onRequest(app);
