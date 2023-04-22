import React, { useState } from "react";
import SwipingComponent from "./SwipingComponent";
import "./home.css";
import { Link } from "react-router-dom";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaMoneyBillWave, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { FaHeadset } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import { IoIosStarOutline } from "react-icons/io";
import Image1 from "../images/deal1.webp";
import Image2 from "../images/deal2.webp";
import Image3 from "../images/deal3.webp";
import { useEffect } from "react";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";

function Home() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [click2, setClick2] = useState(false);
  const handleClick2 = () => setClick2(!click);
  const closeMobileMenu = () => setClick2(false);
  const [fake, setFake] = useState([]);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setFake(jsonData);
  };
  // fakestore();

  return (
    <>
      <div className="general-container">
        <div className="header1">
          <HeaderSection />
        </div>
        <div className="Category-2"></div>
        <div className="info-tab">
          <div className="info-1">
            <div className="icon">
              <AiFillSafetyCertificate />
            </div>
            <h2 className="first">Safe & Reliable Payments</h2>
          </div>
          <div className="info-1">
            <div className="icon">
              <FaMoneyBillWave />
            </div>
            <h2 className="first">Money Back Guarantee </h2>
          </div>
          <div className="info-1">
            <div className="icon">
              <FaHeadset />
            </div>
            <h2 className="first">Safe & Reliable Payments</h2>
          </div>
        </div>
        <div className="swiper-area">
          <div className="pos-swiper">
            <SwipingComponent />
          </div>
          <div className="white-card">
            <p>Welcome to Aliexpress!</p>
            <div className="option">
              <button className="Join" onClick={handleClick2}>
                <p className="text">Join</p>
              </button>
              <Link exact to="/sign-in">
                <button className="sign">Sign in</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="super-deals">
          <div>
            <h2>
              Super<span>Deals</span>
            </h2>
            <a href="/">View More</a>
          </div>
          <p>Top Product, incredible prices</p>
          <div className="images">
            <div>
              <img src={Image1} alt="" />
              <p className="supe-text">$ 2,000</p>
            </div>
            <div>
              <img src={Image2} alt="" />
              <p className="supe-text">$ 2,000</p>
            </div>
            <div>
              <img src={Image3} alt="" />
              <p className="supe-text">$ 2000</p>
            </div>
          </div>
        </div>
        <div className="product-container">
          {fake.map((values) => {
            return (
              <>
                <div className="product">
                  <img src={values.image} alt="" />
                  <div className="content">
                    <h5>{values.title}</h5>
                    <p>Price: $100</p>
                  </div>

                  <div className="rating">
                    <div onClick={handleClick}>
                      {click ? <GrStar /> : <IoIosStarOutline />}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div
          id="modal"
          className="col-7 mx-auto col-md-5 col-lg-5 text-capitalize text-center"
        >
          <div className={click2 ? "Pop-up-div active" : "Pop-up-div"}>
            <div className="x-mark">
              <HiXMark onClick={closeMobileMenu} />{" "}
            </div>
            <button className="options">
              <Link to="/sign-in">
                <div className="icon1">
                  <FaEnvelope />
                </div>
                <p className="text">Sign Up with Email and Password</p>
              </Link>
            </button>
            <button className="options">
              <div className="icon1">
                <FaGoogle />
              </div>
              <p className="text">Continue With Google Account</p>
            </button>
            <button className="options">
              <div className="icon2">
                <FaFacebook />
              </div>
              <p className="text">Continue With Facebook</p>
            </button>
            <button className="options">
              <div className="icon3">
                <FaTwitter />
              </div>
              <p className="text">Continue With Twitter</p>
            </button>
            <p className="text1">
              Alreadey have an Account
              <Link exact to="/sign-in">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <section className="footer-class">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
