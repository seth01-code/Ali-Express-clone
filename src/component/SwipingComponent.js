import React from "react";
import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import Image1 from "../images/slide2.webp";
import Image2 from "../images/slide3.webp";
import Image3 from "../images/slide4.webp";
import Image4 from "../images/slide1.jpg";

//  Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwipingComponent() {
  return (
    <Swiper
      // Swiper modules
      modules={[Navigation, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
    >
      <SwiperSlide>
        <img src={Image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Image4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwipingComponent;
