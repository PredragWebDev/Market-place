import React from 'react';
import './BaseBallLeague.css';
import {  Container, Row, Col } from "react-bootstrap";
import player1 from '../../../Images/baseballLeauge/player1.jpg';
import player2 from '../../../Images/baseballLeauge/player2.jpg';
import player3 from '../../../Images/baseballLeauge/player3.jpg';
import player4 from '../../../Images/baseballLeauge/player4.jpg';
import player5 from '../../../Images/baseballLeauge/player5.jpg';
import banner1 from '../../../Images/baseballLeauge/baseballBanner2.jpg';
import banner2 from '../../../Images/baseballLeauge/baseballBanner2.jpg';

const BaseBallLeague = () => {
    return (
        <Container>
            <Row style={{padding: "100px 0px 100px"}}>
    <Col xs={6}>
        <div>
            <h1 style={{width: "700px", marginBottom: "100px"}}><span className='color'>MLW</span>  Player Rankings For <span className='color'>International</span></h1>
            <div className="CricketLeague">

                <div className="images">
                <h1>01</h1>
                    <img src={player1} alt="" />
                </div>
                <div className="Text">
                    <h2>Christian Vaquero</h2>
                    <h4>Venezuela</h4>
                    
                     </div>

            </div>


            <div className="CricketLeague">

                <div className="images">
                <h1>02</h1>
                    <img src={player2} alt="" />
                </div>
                <div className="Text">
                    <h2>Ryan Reckley</h2>
                    <h4>The Bahamas</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>03</h1>
                    <img src={player3} alt="" />
                </div>
                <div className="Text">
                    <h2>Anthony Gutierrez</h2>
                    <h4>England</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>04</h1>
                    <img src={player4} alt="" />
                </div>
                <div className="Text">
                    <h2>Johan Barrios</h2>
                    <h4>Panama</h4>
                    
                     </div>

            </div>
            <div className="CricketLeague">

                <div className="images">
                    <h1>05</h1>
                    <img src={player5} alt="" />
                </div>
                <div className="Text">
                    <h2>Alexis Hernandez</h2>
                    <h4>Taiwan</h4>
                    
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

export default BaseBallLeague;