import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class DetailConsumer extends Component {
  render() {
    const { id, title, image, price, inCart, details } = this.props.product;

    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my3 ">
            <img src={image} alt="product" className="image-fluid" />
          </div>
          {/* prodct text */}
          <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
            <h3>model: {title}</h3>
            <h4 className="color-red">
              <strong>
                price: <span>$</span> {price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about the product:
            </p>
            <p className="text-muted lead">{details}</p>
            <div>
              <Link to="/women's-fashion">
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                disabled={inCart ? true : false}
                onClick={(value) => {
                  value.addToCart(id);
                }}
              >
                {inCart ? "inCart" : "add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
