import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Image from "../images/Aliexpress_logo_PNG2.png";
import { FaBars } from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { IoIosLaptop } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { TfiCamera } from "react-icons/tfi";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoBasketballOutline } from "react-icons/io5";
import { MdOutlineChair } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { GiBabyBottle } from "react-icons/gi";
import { GiMirrorMirror } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";

function HeaderSection() {
  const [isShown, setIsShown] = useState(false);

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <>
      <div className="header-container">
        <Link to="/">
          <div className="header-logo">
            <img src={Image} alt="" />
          </div>
        </Link>
        <div className="container">
          <button
            type="button"
            className="button"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {/* <ImMenu3 /> */}
          </button>
          {isShown && (
            <div
              className="dropdown"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <div className="category">
                <p>Categories</p>
              </div>
              <ul>
                <Link to="women's-fashion">
                  <li>
                    <div className="icons">
                      <GiLargeDress />
                    </div>
                    Products
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className="input-section">
          <input
            className="input1"
            onClick={incrementCounter}
            type="text"
            placeholder="Iphone 11 pro max case"
          />
          <div className="search-icon">
            <RiSearch2Line />
          </div>
        </div>
        <Link exact to="/my-cart">
          <div className="cart">
            <HiOutlineShoppingCart className="icon" />
            <div className="floating-number">
              <p className="number">{counter}</p>
            </div>
          </div>
        </Link>
      </div>

      <section className="heading">
        <div className="header-cont">
          <div className="nav-logo">
            <div className="ham">
              <FaBars />
            </div>
            <Link to="/">
              <div className="header-logo">
                <img src={Image} alt="" />
              </div>
            </Link>
          </div>
          <Link exact to="/my-cart">
            <div className="cart1">
              <HiOutlineShoppingCart />
              <IoIosContact />
              <div>
                <p>{counter}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="input-section1">
          <input
            onClick={incrementCounter}
            type="text"
            placeholder="Iphone 11 pro max case"
          />
          <div>
            <RiSearch2Line />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderSection;
