import React from "react";
import Slider from "react-slick";
import image4 from "../../Images/cricketLeague/CTH2_1920x1080_NoCTA.jpg";
import image6 from "../../Images/cricketLeague/FLC1awJaIAIFVPa.jpg";
import image2 from "../../Images/FootballLeague/A1144-0.jpg";
import image5 from "../../Images/FootballLeague/Women-Header.jpg.adapt.crop16x9.575p.jpg";
import image7 from "../../Images/HockeyLeague/cut (2).jpg";
import image3 from "../../Images/HockeyLeague/cut.jpg";
import image1 from "../../Images/palyers/21052548-0-image-a-30_1573822434141.jpg";
import image8 from "../../Images/palyers/Top-10-highest-paid-footballers-in-the-world.jpg";
import "./CountSlider.css";

const CountSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
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
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

export default CountSlider;
