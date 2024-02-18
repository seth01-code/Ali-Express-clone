import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import CartItem from "./CartItem";
import { ProductConsumer } from "../Context";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Title from "../Title";
import CartColumns from "./CartColumns";

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        //         // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <div className="py-5">
                  <Title title="your cart" />
                  <CartColumns />
                  <CartList value={value} />
                </div>
              </React.Fragment>
            );
          } else {
            return <Title title="No Item in Checkout" />;
          }
        }}
      </ProductConsumer>

      <form id="payment-form" onSubmit={handleSubmit}>
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </section>
  );
}

// // import React, { useEffect, useState } from "react";
// //

// // export default function Payment() {
// //
// //   return (
// //
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import "./Payment.css";
// import { useStateValue } from "../Context";
// import CheckoutProduct from "./CheckoutProduct";
// import { Link, useHistory, useNavigate } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "./reducer";
// import axios from "./axios";
// import { db } from "./firebase";

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const stripe = useStripe();
//   const elements = useElements();

//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
//     // generate the special stripe secret which allows us to charge a customer
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         // Stripe expects the total in a currencies subunits
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };

//     getClientSecret();
//   }, [basket]);

//   console.log("THE SECRET IS >>>", clientSecret);
//   console.log("👱", user);

//   const handleSubmit = async (event) => {
//     // do all the fancy stripe stuff...
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentIntent }) => {
//         // paymentIntent = payment confirmation

//         db.collection("users")
//           .doc(user?.uid)
//           .collection("orders")
//           .doc(paymentIntent.id)
//           .set({
//             basket: basket,
//             amount: paymentIntent.amount,
//             created: paymentIntent.created,
//           });

//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);

//         dispatch({
//           type: "EMPTY_BASKET",
//         });

//         navigate("/orders");
//       });
//   };

//   const handleChange = (event) => {
//     // Listen for changes in the CardElement
//     // and display any errors as the customer types their card details
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };

//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout (<Link to="/checkout">{basket?.length} items</Link>)
//         </h1>

//         {/* Payment section - delivery address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment__address">
//             <p>{user?.email}</p>
//             <p>123 React Lane</p>
//             <p>Los Angeles, CA</p>
//           </div>
//         </div>

//         {/* Payment section - Review Items */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment__items">
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Payment section - Payment method */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">
//             {/* Stripe magic will go */}

//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />

//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => <h3>Order Total: {value}</h3>}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>

//               {/* Errors */}
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;
