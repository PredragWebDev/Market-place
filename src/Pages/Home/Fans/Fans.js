import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Fans.css';
import image1 from '../../../Images/02.jpg';
import image2 from '../../../Images/05.jpg';


const Fans = () => {
    return (
        <Container className='Fans'>
            <h1>WHAT FANS ARE SAYING</h1>

            <div>
            <Carousel >
                <Carousel.Item>
                    <div className="row d-flex justify-content-center align-items-center">
                           <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div className="clint">
                           <h1>Stiven Metzler</h1>
                           <h3>Founder, AllSportsShop</h3>
                           <p>Cleveland became a title town for the first time since Dec. 27, 1964, when the Browns won the ESL championship. There had been so many close calls in between.</p>
                           </div>
                           </div>
                           <div className="col-md-6">
                           <img
                           className="fan-img"
                           src={image1}
                           alt="second slide"
                           />
                           </div>
                    </div>
                  </Carousel.Item>
                <Carousel.Item>
                <div className="row d-flex justify-content-center align-items-center">
                           <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div className="clint">
                           <h1>John Robert</h1>
                           <h3>CO-Founder, AllSportsShop</h3>
                           <p>John Robert became a title town for the first time since Dec. 28, 1965, when the Browns won the ESL championship. There had been so many close calls in between.</p>
                           </div>
                           </div>
                           <div className="col-md-6">
                           <img
                           className="fan-img"
                           src={image2}
                           alt="second slide"
                           />
                           </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

        </Container>
    );
};

export default Fans;