import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-5 my-0 text-center text-title">
        <h1 className="text-capitalize font-weight-bold text-center">
          {name}
          <br />
          <strong className="text-blue"> {title}</strong>
        </h1>
      </div>
    </div>
  );
}
