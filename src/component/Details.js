import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { detail } from "../WomenData";
import Title from "./Title";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, image, title, details, price, inCart } = value.detail;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <Title title={title} />
                </div>
              </div>
              {/* end title */}
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
                  <p className="text-muted lead text-left">{details}</p>
                  <div>
                    <Link to="/women's-fashion">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
