import React from "react";
import { ButtonContainer } from "./Button";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image1 from "../images/Aliexpress_logo_PNG6.png";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-area">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our notifications on our
            best deals
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-area">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />
              <div className="btn">
                <ButtonContainer>Subscribe</ButtonContainer>
              </div>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About us</h2>
              <Link to="/sign-in">How it works</Link>
              <Link to="/">Reviews</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of service</Link>
              <Link to="/">Motivations</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact us</h2>
              <Link to="/sign-in">Support</Link>
              <Link to="/">Custom Orders</Link>
              <Link to="/">Sponsorships</Link>

              <Link to="/">Customer service</Link>
            </div>
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>Videos</h2>
                <Link to="/">Submit Videos</Link>
                <Link to="/">Ambassadors</Link>
                <Link to="/">Agency</Link>
                <Link to="/">Influencer</Link>
              </div>
              <div className="footer-link-items">
                <h2>Social Media</h2>
                <Link to="/sign-in">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">LinkedIn</Link>
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                <img src={Image1} alt="" />
                <p className="text-blue"> AliExpress</p>
              </Link>
            </div>
            <small className="website-rights">
              Aliexpress{" "}
              <span>
                <FaCopyright />
              </span>{" "}
              2022
            </small>
            <div className="social-icons">
              <Link
                to="/"
                target="blank"
                aria-label="Facebook"
                className="social-icon-link facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                to="/"
                target="blank"
                aria-label="Instagram"
                className="social-icon-link instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                to="/"
                target="blank"
                aria-label="Twitter"
                className="social-icon-link twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                to="/"
                target="blank"
                aria-label="Youtube"
                className="social-icon-link youtube"
              >
                <FaYoutube />
              </Link>
              <Link
                to="/"
                target="blank"
                aria-label="LinkedIn"
                className="social-icon-link linkedin"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
