import React, { useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";
import "./style.css";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Container>
      <Row className="g-0 row">
        <div className="col-md-9 Banner">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            effect={"fade"}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            allowTouchMove={false}
            
            
          >
            <SwiperSlide
              className="carousel-banner"
              style={{
                background:
                  'url("https://p0.pikrepo.com/preview/322/682/person-sitting-in-front-of-computer-monitors.jpg")',
                backgroundSize: "cover",
              }}
            >
              <div>
                <h1 className="fw-bold">
                  2016 OFFSEASON <br />
                  PREVIEW STORYBOARD
                </h1>
                <p>
                  Last year, with James attempting to beat the Warriors by
                  himself and the Heat preparing for offseason, Riley took a
                  nice shot at James.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="carousel-banner"
              style={{
                background:
                  'url("https://i.guim.co.uk/img/media/dfed9d8ba139a772e0fca3ee16c1bcd1df7e450e/0_221_5472_3283/master/5472.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=6c737665c6bbbe1c18218fb36baf2c37")',
                backgroundSize: "cover",
              }}
            >
              <div>
                <h1 className="fw-bold">
                  THREE QUESTION MAJOR <br />
                  FINALS PREVIEW
                </h1>
                <p>
                  Becoming a three-time ESL champion. Winning a title for the
                  city of Cleveland. Cementing his legacy as one of the greatest
                  cs:go players ever.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="carousel-banner"
              style={{
                background:
                  'url("https://admin.dailycricket.com.bd/storage/posts/3476/Bangladesh-Cricket-Team.jpg")',
                backgroundSize: "cover",
              }}
            >
              <div>
                <h1 className="fw-bold">
                  CELTICS AGGRESSIVELY <br />
                  SHOPPING 3RD OVERALL <br />
                  PICK
                </h1>
                <p>
                  When I decided to leave Miami — I`m not going to name any
                  names, I can`t do that — but there were some people that I
                  trusted.
                </p>
              </div>
              {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={false}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide className="line">
              Three question major final preview
            </SwiperSlide>
            <SwiperSlide className="line">
              2016 Offseason preview storyboard
            </SwiperSlide>
            <SwiperSlide className="line">
              Three question major final preview
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-md-3 latest-result-box">
          <h3 className="text-uppercase">latest result</h3>
          <Table id="result-table">
            <thead className="thead-light">
              <tr>
                <th>25 SEP,2022</th>
                <th></th>
                <th>KENSINGTON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dinasaur</td>
                <td>/</td>
                <td>
                  <span className="bg-warning px-2 text-dark ms-2">win</span>{" "}
                  Bears
                </td>
              </tr>
              <tr>
                <th>15 JUN,2022</th>
                <th></th>
                <th>ESSENDON</th>
              </tr>
              <tr>
                <td>Eagles</td>
                <td>/</td>
                <td>Kangaroos</td>
              </tr>
              <tr>
                <th>12 JULY,2022</th>
                <th></th>
                <th>ESSENDON</th>
              </tr>
              <tr>
                <td>
                  Bears{" "}
                  <span className="bg-warning px-2 text-dark ms-2">win</span>
                </td>
                <td>/</td>
                <td>Octopus</td>
              </tr>
              <tr>
                <td>Rams </td>
                <td>/</td>
                <td>
                  <span className="bg-warning px-2 text-dark me-2">win</span>
                  Lions
                </td>
              </tr>
            </tbody>
          </Table>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/Xjq4aIqHcSw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Row>
    </Container>
  );
};

export default Banner;
