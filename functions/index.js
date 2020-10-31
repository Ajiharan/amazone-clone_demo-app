const functions = require("firebase-functions");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HfqyyJ0jZ1ztGKcYgSgatUwP47Wt8Tn8zjgQzeKfQjoxxXEsmKoEg4uCQ6oMAGvbQ28voNjfjoE2hChYLvzu8Q800lTGBgM2b"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Hi Express.js");
});

app.post("/payments/create", async (req, res) => {
  console.log("Query", req.query);
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
