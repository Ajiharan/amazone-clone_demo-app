const functions = require("firebase-functions");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51HfqyyJ0jZ1ztGKc11B76bCMUdcaK690bAzPOLL0Qgt4UQ0hPoGJtxKYCQ72uwMQoD26c9slzDTmBISm9iezBf7J000sjAbuju"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Hi Express.js");
});

exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
