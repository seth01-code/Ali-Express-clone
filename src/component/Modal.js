import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "./Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { FaRegCaretSquareDown } from "react-icons/fa";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { image, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-7 mx-auto col-md-5 col-lg-5 text-capitalize text-center"
                    >
                      <h5>item added to the cart</h5>
                      <img
                        src={image}
                        alt="product"
                        className="image-fluid"
                        style={{ width: "15rem", height: "15rem" }}
                      />
                      <h5>{title}</h5>
                      <h5 className="text-muted"> price: $ {price}</h5>
                      <Link to="/women's-fashion">
                        <ButtonContainer onClick={() => closeModal()}>
                          store
                        </ButtonContainer>
                      </Link>
                      <Link to="/my-cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #fff;
  }
`;
