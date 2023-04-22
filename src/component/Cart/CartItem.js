import React from "react";
import { GiTrashCan } from "react-icons/gi";

export default function CartItem({ item, value }) {
  const { id, title, image, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="  row my-3 text-capitalize text-center">
      <div className="list col-10 mx-auto col-lg-2">
        <img
          src={image}
          alt="product"
          style={{ width: "8rem", height: "8rem" }}
          className="img-fluid"
        />
      </div>
      <div className=" col-10 mx-auto mt-4 col-lg-3 list2">
        <strong>
          <span className="d-lg-none">Product: </span>
          {title}
        </strong>
      </div>
      <div
        className=" col-10 mx-auto col-lg-2 list3"
        style={{ color: "orangered" }}
      >
        <span className="d-lg-none">Price: </span>
        {price}
      </div>
      <div className="col-10 mx-auto clo-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className="btn-placing">
            <span className=" btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn-black mx-1">{count}</span>
            <span className="btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <GiTrashCan />
        </div>
      </div>
      <div className=" col-10 mx-auto col-lg-2 text-placing">
        <strong>item total : $ {total}</strong>
      </div>
    </div>
  );
}
