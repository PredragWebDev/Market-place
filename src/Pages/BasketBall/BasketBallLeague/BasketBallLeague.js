import React from 'react';
import './BasketBallLeague.css';
import {  Container, Row, Col } from "react-bootstrap";
import player1 from '../../../Images/BasketballLeague/player1.jpg';
import player2 from '../../../Images/BasketballLeague/player2.jpg';
import player3 from '../../../Images/BasketballLeague/player3.jpg';
import player4 from '../../../Images/BasketballLeague/player4.jpg';
import player5 from '../../../Images/BasketballLeague/player5.jpg';
import banner1 from '../../../Images/BasketballLeague/baseketballBanner1.jpg';
import banner2 from '../../../Images/BasketballLeague/baseketballBanner4.jpg';

const BasketBallLeague = () => {
    return (
        <Container>
            <Row style={{padding: "100px 0px 100px"}}>
    <Col xs={6}>
        <div>
            <h1 style={{width: "700px", marginBottom: "100px"}}><span className='color'>NBA</span>Rosters Feature<span className='color'>International Players</span></h1>
            <div className="CricketLeague">

                <div className="images">
                <h1>01</h1>
                    <img src={player1} alt="" />
                </div>
                <div className="Text">
                    <h2>Bruno Fernando</h2>
                    <h4>Argentina</h4>
                    
                     </div>

            </div>


            <div className="CricketLeague">

                <div className="images">
                <h1>02</h1>
                    <img src={player2} alt="" />
                </div>
                <div className="Text">
                    <h2>Jamal Murray</h2>
                    <h4>Canada</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>03</h1>
                    <img src={player3} alt="" />
                </div>
                <div className="Text">
                    <h2>Jonathan Kuminga</h2>
                    <h4>Congo</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>04</h1>
                    <img src={player4} alt="" />
                </div>
                <div className="Text">
                    <h2>Rudy Gobert</h2>
                    <h4>France</h4>
                    
                     </div>

            </div>
            <div className="CricketLeague">

                <div className="images">
                    <h1>05</h1>
                    <img src={player5} alt="" />
                </div>
                <div className="Text">
                    <h2>Davis Bertans</h2>
                    <h4>Latvia</h4>
                    
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

export default BasketBallLeague;