import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/component/Home";
import SignUp from "../src/component/SignUp";
import WomenCategory from "../src/component/WomenCategory";
import Checkout from "./component/Cart/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./component/Default";
import Details from "./component/Details";
import Modal from "./component/Modal";
import { AuthProvider, ProductConsumer } from "./component/Context";
import Orders from "./component/Orders.js";
import Payment from "./component/Cart/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { requests } from "./Urls";
import axios from "axios";
import { async } from "@firebase/util";

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  return (
    <>
      <ProductConsumer>
        {(item) => {
          const { total } = item;

          const promise = loadStripe(
            "pk_test_51MhAiVKa6yCih5bGqnJQHXlchhmCLOnQ1M5SN4IgwSd38SwDXhHWWBAhD7WvnMSYdfzNMZWbheRFsWwpmGkzD7wZ00FU9RyhnS"
          );

          // useEffect(() => {
          //   // Create PaymentIntent as soon as the page loads
          //   const getClientSecret = async () => {
          //     const response = await axios({
          //       method: "post",
          //       url: `/create-payment-intent?total=${total} * 100`,
          //     });

          //     setClientSecret(response.data.clientSecret);
          //   };

          //   getClientSecret();
          // }, [total]);

          // const appearance = {
          //   theme: "stripe",
          // };
          // const options = {
          //   clientSecret,
          //   appearance,
          // };

          return (
            <AuthProvider>
              <Router>
                <div className="App">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                      path="/women's-fashion"
                      element={<WomenCategory />}
                    />
                    <Route path="/details" element={<Details />} />
                    <Route path="/sign-in" element={<SignUp />} />
                    <Route path="/my-cart" element={<Checkout />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route
                      path="/payment"
                      element={
                        <Elements stripe={promise} clientSecret={clientSecret}>
                          <Payment total={total} />
                        </Elements>
                      }
                    />
                    <Route path="*" element={<Default />} />
                  </Routes>
                  <Modal />
                </div>
              </Router>
            </AuthProvider>
          );
        }}
      </ProductConsumer>
    </>
  );
}
