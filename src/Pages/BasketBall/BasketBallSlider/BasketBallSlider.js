import React from "react";
import Slider from "react-slick";
import image8 from "../../../Images/BasketballLeague/baseketballBanner1.jpg";
import image1 from "../../../Images/BasketballLeague/baseketballBanner2.jpg";
import image2 from "../../../Images/BasketballLeague/baseketballBanner3.jpg";
import image3 from "../../../Images/BasketballLeague/baseketballBanner4.jpg";
import {
  default as image4,
  default as image5,
} from "../../../Images/BasketballLeague/baseketballBanner5.jpg";
import image6 from "../../../Images/BasketballLeague/baseketballBanner6.jpg";
import image7 from "../../../Images/BasketballLeague/baseketballBanner3.jpg";

const BasketBallSlider = () => {
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

export default BasketBallSlider;
