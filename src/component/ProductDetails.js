import React, { useState } from "react";
import { MenData } from "../WomenData";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
// import Addcart from "./Addcart";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ProductDetails = () => {
  return (
    <>
      <section className="product_details">
        <div className=" container">
          <div className="row">
            <div className="top">
              <a href="/">Home</a>
              <span> /</span>
              <span to="product">SHOP PRODUCT</span>
            </div>
            {MenData.map((value) => {
              return (
                <React.Fragment key={value.id}>
                  <div className="d-flex gap-5 align-items-center">
                    <div className="img">
                      <img
                        data-itemID={value.id}
                        className="default-img"
                        src={value.image}
                        alt=""
                      />
                    </div>
                    <div className="details">
                      <h6>{value.title}</h6>
                      <p>
                        {value.price} <span>{value.delprice}</span>
                      </p>
                      {/* <Stack spacing={1}>
                        {/* <Rating
                          name="half-rating"
                          defaultValue={3}
                          precision={0.5}
                        /> */}
                      {/* </Stack>  */}
                      <div className="del">
                        <p>{value.details}</p>
                      </div>
                      {/* <div className="add_cart"><Addcart /></div> */}
                      <div className="categories">
                        <h6>{value.cat}</h6>
                        <h6>{value.tag}</h6>
                      </div>
                      <div className="product-icon">
                        <ul>
                          <li>
                            {/* <a href="facebook">
                              <FacebookIcon></FacebookIcon>
                            </a> */}
                          </li>
                          <li>
                            {/* <a href="facebook">
                              <SportsVolleyballIcon></SportsVolleyballIcon>
                            </a> */}
                          </li>
                          <li>
                            {/* <a href="facebook">
                              <PinterestIcon></PinterestIcon>
                            </a> */}
                          </li>
                          <li>
                            {/* <a href="facebook">
                              <TwitterIcon></TwitterIcon>
                            </a> */}
                          </li>
                          <li>
                            {/* <a href="facebook">
                              <LinkedInIcon></LinkedInIcon>
                            </a> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
