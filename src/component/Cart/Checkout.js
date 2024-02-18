import React, { Component } from "react";
import CartColumns from "./CartColumns.js";
import EmptyCart from "./EmptyCart.js";
import { ProductConsumer } from "../Context.js";
import CartList from "./CartList.js";
import CartTotals from "./CartTotals.js";
import Title from "../Title";
import HeaderSection from "../HeaderSection";
import { useNavigate } from "react-router-dom";

export default class Checkout extends Component {
  render() {
    // const history = navigate("*");
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <HeaderSection />
                  <div className="py-5">
                    <Title title="your cart" />
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
