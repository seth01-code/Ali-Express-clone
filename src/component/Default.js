import React, { Component } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";

export default class Default extends Component {
  render() {
    // const Child () =>{
    // const location = useLocation();
    // const navigate = useNavigate();
    // const match = useMatch("write-the-url-you-want-to-match-here");

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>
              the requested URL{" "}
              {/* <span className="text-danger">{location.pathname}</span> was not */}
              found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
