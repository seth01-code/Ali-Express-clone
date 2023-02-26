import React, { useState } from "react";
import SwipingComponent from "./SwipingComponent";
import "./home.css";
import { Link } from "react-router-dom";
import Icon1 from "../images/Icon1.png";
import Icon2 from "../images/Icon2.png";
import Icon3 from "../images/Icon3.png";
import Icon4 from "../images/Icon4.png";
import Icon5 from "../images/Icon5.png";
import Icon6 from "../images/Icon6.png";
import Icon7 from "../images/Icon7.png";
import { GiLargeDress } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { IoIosLaptop } from "react-icons/io";
import { TfiCamera } from "react-icons/tfi";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoBasketballOutline } from "react-icons/io5";
import { MdOutlineChair } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { GiBabyBottle } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaMoneyBillWave, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
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
      <div className="header1">
        <HeaderSection />
      </div>
      <div className="dropdown1">
        <Link className="a" to="women's-fashion">
          <h2 className="list">
            <div className="icons1">
              <GiLargeDress />
            </div>
            Products
          </h2>
        </Link>
      </div>
      <div className="Category-2">
        <div className="cat-container">
          <img src={Icon1} alt="" />
          <div className="text">
            <p>All Categories</p>
          </div>
        </div>
        <div className="cat-container">
          <img src={Icon2} alt="" />
          <div className="text">
            <p>All Categories</p>
          </div>
        </div>
        <div className="cat-container">
          <img src={Icon3} alt="" />
          <div className="text">
            <p>All Categories</p>
          </div>
        </div>
        <div className="cat-container">
          <img src={Icon4} alt="" />
          <div className="text">
            <p>All Categories</p>
          </div>
        </div>
        <div className="cat-container">
          <img src={Icon5} alt="" />
          <div className="text">
            <p>All Categories</p>
          </div>
        </div>
        <div className="cat-container">
          <img src={Icon6} alt="" />
          <div className="text">
            <p>All Categories</p>
          </div>
        </div>
        <div className="cat-container">
          <img src={Icon7} alt="" />
          <div className="text">
            <p>All Categories</p>
          </div>
        </div>
      </div>
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
        <SwipingComponent />
        <div className="white-card">
          <p>Welcome to Aliexpress!</p>
          <div className="option">
            <button className="Join" onClick={handleClick2}>
              <p className="text">Join</p>
            </button>
            <Link exact to="/sign-in">
              <button className="sign">
                <p className="text">Sign In</p>
              </button>
            </Link>
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
              <p>NGN 2,000.51</p>
            </div>
            <div>
              <img src={Image2} alt="" />
              <p>NGN 2,000.51</p>
            </div>
            <div>
              <img src={Image3} alt="" />
              <p>NGN 2,000.51</p>
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
      </div>
      <div className={click2 ? "Pop-up-div active" : "Pop-up-div"}>
        <div className="x-mark">
          <HiXMark onClick={closeMobileMenu} />
        </div>
        <button className="options">
          <div className="icon">
            <FaEnvelope />
          </div>
          <p className="text">Sign Up with Email and Password</p>
        </button>
        <button className="options">
          <div className="icon">
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
        <p>
          Alreadey have an Account
          <Link exact to="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
      <section className="footer">
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Home;
