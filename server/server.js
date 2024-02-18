const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51MhAiVKa6yCih5bGs7KKS4TFzisiLV0PR7JW6vCCXRLlEUuDltlGLAjvyRMhDOzQ9jEi1Nzzf1gYof7XwinHJD2T00BxJFbsvc"
);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.get("/", (req, res) => {
  res.status(200).send("Seth is a goat");
});

app.post("/create-payment-intent?total", async (req, res) => {
  const total = req.query.total;

  console.log("payment request received BOOM!!! for thus amount >>>", total);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
