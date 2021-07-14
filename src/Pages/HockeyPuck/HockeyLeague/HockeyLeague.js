import React from 'react';
import './HockeyLeague.css';
import {  Container, Row, Col } from "react-bootstrap";
import player1 from '../../../Images/HockeyLeague/3895074.png';
import player2 from '../../../Images/HockeyLeague/i (2).png';
import player3 from '../../../Images/HockeyLeague/i.png';
import player4 from '../../../Images/HockeyLeague/i (1).png';
import player5 from '../../../Images/HockeyLeague/Victor-Hedman-PNG-HD-Quality.png';
import banner1 from '../../../Images/HockeyLeague/download.jpg';
import banner2 from '../../../Images/HockeyLeague/images.jpg';

const HockeyLeague = () => {
    return (
        <Container>
            <Row style={{padding: "100px 0px 100px"}}>
    <Col xs={6}>
        <div>
            <h1 style={{width: "700px", marginBottom: "100px"}}><span className='color'>NHL's  </span>  Top <span className='color'>Players</span></h1>
            <div className="CricketLeague">

                <div className="images">
                <h1>01</h1>
                    <img src={player1} alt="" />
                </div>
                <div className="Text">
                    <h2>Connor McDavid, C</h2>
                    <h4>Canadian</h4>
                    
                     </div>

            </div>


            <div className="CricketLeague">

                <div className="images">
                <h1>02</h1>
                    <img src={player2} alt="" />
                </div>
                <div className="Text">
                    <h2>Nathan MacKinnon, C </h2>
                    <h4> Canadian</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>03</h1>
                    <img src={player3} alt="" />
                </div>
                <div className="Text">
                    <h2>Leon Draisaitl, C</h2>
                    <h4> German </h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>04</h1>
                    <img src={player4} alt="" />
                </div>
                <div className="Text">
                    <h2>Auston Matthews, C </h2>
                    <h4>USA</h4>
                    
                     </div>

            </div>
            <div className="CricketLeague">

                <div className="images">
                    <h1>05</h1>
                    <img src={player5} alt="" />
                </div>
                <div className="Text">
                    <h2>Victor Hedman, D</h2>
                    <h4> Swedish</h4>
                    
                     </div>

            </div>
            
            
            
        </div>
    </Col>

    <Col  xs={6}>
        <div className='ImageBanner'>
            <img style={{marginTop: '170px', marginBottom: "50px"}} src={banner1} alt="" />
            <img style={{margin: '0px'}} src={banner2} alt="" />
        </div>
    </Col>
    </Row>
        </Container>
    );
};

export default HockeyLeague;