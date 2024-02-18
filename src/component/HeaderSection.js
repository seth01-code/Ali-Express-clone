import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Image from "../images/Aliexpress_logo_PNG2.png";
import { FaBars } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { AuthContext } from "./Context";
import { getAuth, signOut } from "firebase/auth";

function HeaderSection() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const { user } = useContext(AuthContext);

  const SignOut = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="header-container1">
        <Link to="/">
          <div className="header-logo">
            <img src={Image} alt="" />
          </div>
        </Link>
        <div className="input-section">
          <input
            className="input1"
            type="text"
            placeholder="Iphone 11 pro max case"
          />
          <div className="search-icon">
            <RiSearch2Line />
          </div>
        </div>
        <Link to="/women's-fashion">
          <div className="icon icon-area">
            <BiCategory />
            <p className="text-blue">Products</p>
          </div>
        </Link>
        <Link to="/my-cart">
          <div className="cart">
            <HiOutlineShoppingCart className="icon" />
          </div>
        </Link>
        <div className="account">
          {!!user ? (
            <div className="user-cont">
              <p>{`Welcome, ${user.email}`}</p>
              <div className="user-content">
                <Link onClick={SignOut}>Sign Out</Link>
              </div>
            </div>
          ) : (
            <div className="user-content">
              <Link to="/sign-in">Sign in</Link>
            </div>
          )}
        </div>
      </div>
      {/* mobile header */}
      <section className="heading">
        <div className="header-cont">
          <div className="nav-logo">
            <div className="ham" onClick={handleClick}>
              <FaBars />
            </div>
            <div
              className={click ? "menu-icon inactive" : "menu-icon"}
              onClick={closeMobileMenu}
            >
              <HiXMark />
            </div>
            <Link to="/">
              <div className="header-logo">
                <img src={Image} alt="" />
              </div>
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/women's-fashion"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Join
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          <div className="cart1">
            <Link exact to="/my-cart">
              <div className="cart-2">
                <HiOutlineShoppingCart />
              </div>
            </Link>
          </div>
          <div className="cart-2">
            <div className="icons">
              <IoIosContact />
            </div>
          </div>
          <div className="account">
            {!!user ? (
              <div className="dropdown">
                <p>{`Welcome, ${user.email}`}</p>
                <div className="dropdown-content">
                  <Link to="/">Create Stories</Link>
                  <Link to="/">My Stories</Link>
                  <Link onClick={SignOut}>Sign Out</Link>
                </div>
              </div>
            ) : (
              <Link to="/sign-in">Sign in</Link>
            )}
          </div>
        </div>
        <div className="input-section1">
          <input type="text" placeholder="Iphone 11 pro max case" />
          <div>
            <RiSearch2Line />
          </div>
        </div>
        {/* <div className="user"></div> */}
      </section>
    </>
  );
}

export default HeaderSection;
