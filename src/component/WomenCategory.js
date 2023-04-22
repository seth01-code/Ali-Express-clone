import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import HeaderSection from "./HeaderSection";
import Product from "./Product";
import Title from "./Title";

export default class WomenCategory extends Component {
  render() {
    return (
      <>
        <HeaderSection />
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </>
    );
  }
}

// import React, { useState } from "react";
// import { GrStar } from "react-icons/gr";
// import { IoIosStarOutline } from "react-icons/io";
// import HeaderSection from "./HeaderSection";

// function WomenCategory() {
//   const [click, setClick] = useState(false);
//   const [click1, setClick1] = useState(false);
//   const [click2, setClick2] = useState(false);
//   const [click3, setClick3] = useState(false);
//   const [click4, setClick4] = useState(false);
//   const handleClick = () => setClick(!click);
//   const handleClick1 = () => setClick1(!click1);
//   const handleClick2 = () => setClick2(!click2);
//   const handleClick3 = () => setClick3(!click3);
//   const handleClick4 = () => setClick4(!click4);

//   return (
//     <>
//       <div className="header">
//         <HeaderSection />
//       </div>

//       <div className="products"></div>
//       <section className="products">
//         {data.map((element) => {
//           return (
//             <div className="box" key={element.id}>
//               <img src={element.image} alt="" />
//               <div className="content">
//                 <p className="title">{element.title}</p>
//                 <div className="price">
//                   <p>NGN {element.price}</p>
//                 </div>
//                 <div className="rating">
//                   <button>Add to Cart</button>
//                   <div className="icons">
//                     {click4 ? (
//                       <GrStar onClick={handleClick4} />
//                     ) : (
//                       <IoIosStarOutline onClick={handleClick4} />
//                     )}

//                     {click3 ? (
//                       <GrStar onClick={handleClick3} />
//                     ) : (
//                       <IoIosStarOutline onClick={handleClick3} />
//                     )}

//                     {click2 ? (
//                       <GrStar onClick={handleClick2} />
//                     ) : (
//                       <IoIosStarOutline onClick={handleClick2} />
//                     )}

//                     {click1 ? (
//                       <GrStar onClick={handleClick1} />
//                     ) : (
//                       <IoIosStarOutline onClick={handleClick1} />
//                     )}

//                     {click ? (
//                       <GrStar onClick={handleClick} />
//                     ) : (
//                       <IoIosStarOutline onClick={handleClick} />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </>
//   );
// }

// export default WomenCategory;
