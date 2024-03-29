import React from "react";
import Title from "../Title";

export default function EmptyCart() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <Title title="your cart is currently empty" />
        </div>
      </div>
    </div>
  );
}
