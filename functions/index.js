const Functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MhAiVKa6yCih5bGs7KKS4TFzisiLV0PR7JW6vCCXRLlEUuDltlGLAjvyRMhDOzQ9jEi1Nzzf1gYof7XwinHJD2T00BxJFbsvc"
);

// API

// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/create-payment-intent", async (request, response) => {
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "USD",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = Functions.https.onRequest(app);
//Example endpoint
//http://localhost:5001/aliexpress-clone-73a90/us-central1/api
