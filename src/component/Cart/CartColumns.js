import React from "react";

export default function CartColumns() {
  return (
    <div className=" container-fluid text-center d-none d-lg-block">
      <div className=" row my-style">
        <div className="col-10 mx-auto col-lg-1">
          <p className="small-text text-uppercase">Products</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="small-text text-uppercase">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="small-text text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="small-text text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="small-text text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-1">
          <p className="small-text text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
