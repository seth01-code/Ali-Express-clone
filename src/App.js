import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/component/Home";
import SignUp from "../src/component/SignUp";
import WomenCategory from "../src/component/WomenCategory";
import Checkout from "./component/Cart/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
// import MenCategory from "./component/MenCategory";
// import PhoneCategory from "./component/PhoneCategory.js";
// import KidsCategory from "./component/KidsCategory.js";
// import HomeCategory from "./component/HomeCategory";
// import Common from "./component/AccountBox/Common";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Default from "./component/Default";
import Product from "./component/Product";
import Details from "./component/Details";
import Modal from "./component/Modal";

function App() {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("the user is >>>", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women's-fashion" element={<WomenCategory />} />
            <Route path="/details" element={<Details />} />
            <Route path="/sign-in" element={<SignUp />} />
            <Route path="/my-cart" element={<Checkout />} />
            <Route element={<Default />} />
          </Routes>
          <Modal />
        </div>
      </Router>
    </>
  );
}

export default App;
