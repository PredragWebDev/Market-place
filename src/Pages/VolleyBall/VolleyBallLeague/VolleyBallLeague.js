import React from 'react';
import './VolleyBallLeague.css';
import {  Container, Row, Col } from "react-bootstrap";
import player1 from '../../../Images/VolleyBallLeauge/player1.jpg';
import player2 from '../../../Images/VolleyBallLeauge/player2.jpg';
import player3 from '../../../Images/VolleyBallLeauge/player3.jpg';
import player4 from '../../../Images/VolleyBallLeauge/player4.jpg';
import player5 from '../../../Images/VolleyBallLeauge/player5.jpg';
import banner1 from '../../../Images/VolleyBallLeauge/volleyballBanner1.jpg';
import banner2 from '../../../Images/VolleyBallLeauge/volleyballBanner4.jpg';

const VolleyBallLeague = () => {
    return (
        <Container>
            <Row style={{padding: "100px 0px 100px"}}>
    <Col xs={6}>
        <div>
            <h1 style={{width: "700px", marginBottom: "100px"}}><span className='color'>ICC</span>  Player Rankings For  <span className='color'>All-Rounders</span></h1>
            <div className="CricketLeague">

                <div className="images">
                <h1>01</h1>
                    <img src={player1} alt="" />
                </div>
                <div className="Text">
                    <h2>Giba</h2>
                    <h4>Brazil</h4>
                    
                     </div>

            </div>


            <div className="CricketLeague">

                <div className="images">
                <h1>02</h1>
                    <img src={player2} alt="" />
                </div>
                <div className="Text">
                    <h2>Saeid Marouf</h2>
                    <h4>Iranian</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>03</h1>
                    <img src={player3} alt="" />
                </div>
                <div className="Text">
                    <h2>Chris Woakes</h2>
                    <h4>England</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>04</h1>
                    <img src={player4} alt="" />
                </div>
                <div className="Text">
                    <h2>Ivan Zaytsev</h2>
                    <h4>Russian</h4>
                    
                     </div>

            </div>
            <div className="CricketLeague">

                <div className="images">
                    <h1>05</h1>
                    <img src={player5} alt="" />
                </div>
                <div className="Text">
                    <h2>Steve Timmons</h2>
                    <h4>American</h4>
                    
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

export default VolleyBallLeague;