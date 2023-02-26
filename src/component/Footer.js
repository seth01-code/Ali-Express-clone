import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="content">
          <div className="first-row">
            <h2>Help</h2>
            <p>
              <Link>Help Center</Link>,<Link>Disputes & Reports</Link>,
              <Link>Buyer Protection</Link>,<Link>Report IPR Infringement</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
