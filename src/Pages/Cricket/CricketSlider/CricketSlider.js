import React from "react";
import Slider from "react-slick";
import image8 from "../../../Images/cricketLeague/CLUB-TICKETING-PROGRAM_social_1920x1080_Landscape.jpg";
import image1 from "../../../Images/cricketLeague/CTH2_1920x1080_NoCTA.jpg";
import image2 from "../../../Images/cricketLeague/FLC1awJaIAIFVPa.jpg";
import image3 from "../../../Images/cricketLeague/ICC-1170x614.jpg";
import {
  default as image4,
  default as image5,
} from "../../../Images/cricketLeague/ICC-Mens-T20-World-Cup-2022-Tickets-Booking.jpg";
import image6 from "../../../Images/cricketLeague/icc_mens_t20_world_cup_2021_dubai_intern_2021_oct_23_2021_nov_11_dubai_international_stadium_82188-full-en1633270121.png";
import image7 from "../../../Images/cricketLeague/JfQocbY8.jpg";
import "./CricketSlider.css";

const CricketSlider = () => {
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

export default CricketSlider;
