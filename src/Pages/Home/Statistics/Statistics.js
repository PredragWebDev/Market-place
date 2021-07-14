import React from 'react';
import './Statistics.css';
import images from '../../../Images/05.jpg';
import { Container, Row } from 'react-bootstrap';



const Statistics = () => {
  return (
    <Container className='Statistics'>


      <div className="text">
        <h1>PLAYERS STATISTICS</h1>
      </div>

      <div className="Players">
        <h2>Maynuddin </h2>
        <div className="Player">
          <div className="feild">
            <h3>NATIONALITY</h3><p>Bangladesh</p>
          </div>
          <div className="Unfeild">
            <h3>POSITION</h3><p>
              Entry Fragger</p>
          </div>
          <div className="feild">
            <h3>HEIGHT</h3><p>174</p>
          </div>
          <div className="Unfeild">
            <h3>WEIGHT</h3><p>
              56</p>
          </div>
          <div className="feild">
            <h3>AGE</h3><p>24</p>
          </div>
          <div className="Unfeild">
            <h3>COUNTRY</h3><p>
              Taka</p>
          </div>
          <div className="feild">
            <h3>CURRENT TEAM</h3><p>Bluebirds</p>
          </div>
          <div className="Unfeild">
            <h3>PAST TEAMS</h3><p>
              Eagles</p>
          </div>


        </div>
      </div>


      <div className="PlayerPhoto">
        <div className="shedo">1

        </div>
        <img src={images} alt="" />
      </div>

    </Container>



  );
};

export default Statistics;