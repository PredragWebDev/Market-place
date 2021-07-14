import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Sponsored.css";

const Sponsored = () => {
  return (
    <Container className="Sponsored">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://splash.stylemixthemes.com/esport/wp-content/uploads/sites/12/2019/10/splash-esport_03-06.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://splash.stylemixthemes.com/esport/wp-content/uploads/sites/12/2019/10/splash-esport_03.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://splash.stylemixthemes.com/esport/wp-content/uploads/sites/12/2019/10/splash-esport_03-02.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://splash.stylemixthemes.com/esport/wp-content/uploads/sites/12/2019/10/splash-esport_03-03.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://splash.stylemixthemes.com/esport/wp-content/uploads/sites/12/2019/10/splash-esport_03-04.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://splash.stylemixthemes.com/esport/wp-content/uploads/sites/12/2019/10/splash-esport_03-05.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Sponsored;
