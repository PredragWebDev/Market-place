import React from "react";
import Slider from "react-slick";
import image8 from "../../../Images/baseballLeauge/baseballBanner1.jpg";
import image1 from "../../../Images/baseballLeauge/baseballBanner2.jpg";
import image2 from "../../../Images/baseballLeauge/baseballBanner3.jpg";
import image3 from "../../../Images/baseballLeauge/baseballBanner4.jpg";
import {
  default as image4,
  default as image5,
} from "../../../Images/baseballLeauge/baseballBanner5.jpg";
import image6 from "../../../Images/baseballLeauge/baseballBanner1.jpg";
import image7 from "../../../Images/baseballLeauge/baseballBanner3.jpg";
import "./BaseBallSlider.css";

const BaseBallSlider = () => {
  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <Slider {...settings}>
        <div className="ImagesItam">
          <img src={image1} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image2} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image3} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image4} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image5} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image6} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image7} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image8} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image3} alt="" />
        </div>
        <div className="ImagesItam">
          <img src={image6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default BaseBallSlider;
