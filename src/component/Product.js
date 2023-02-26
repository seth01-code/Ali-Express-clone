import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import HeaderSection from "./HeaderSection";
import { ProductConsumer } from "./Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, image, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-7 mx-auto col-md-7 col-lg-4 my-4">
        <div key={id} className="card">
          <ProductConsumer>
            {(value) => (
              <>
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={image} alt="product" className="card-img-top" />
                  </Link>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <p className=" title align-self-center mb-0">{title}</p>
                  <h6 className="text-blue font-italic mb-0">
                    <span className="mr-1">$</span>
                    {price}
                  </h6>
                  <button
                    className="cart-btn align-self-center"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in cart
                      </p>
                    ) : (
                      <HiOutlineShoppingCart />
                    )}
                  </button>
                </div>
              </>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    height: 100%;
    background: #cecece;
    border-color: transparent;
    transition: all 1s linear;
  }

  .title {
    font-size: 14px;
    font-weight: 900;
    padding: 0 0 3rem 0;
    margin: 2rem 0 0 1.3rem;
  }

  .text-blue {
    color: #f15a22;
    font-size: 16px;
    padding: 7rem 0 0 0;
  }

  .card-footer {
    height: 50%;
    position: relative;
    overflow: hidden;
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.3);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem 0.6rem;
    background: #f15a22;
    color: #fff;
    border: none;
    font-size: 1.4rem;
    border-radius: 0 0.5rem 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }

  .cart-btn:hover {
    filter: brightness(1.3);
    cursor: pointer;
  }

  .card:hover .cart-btn {
    transform: translate(0, 0);
  }
`;
