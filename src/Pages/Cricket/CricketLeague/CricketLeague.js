import React from 'react';
import './CricketLeague.css';
import {  Container, Row, Col } from "react-bootstrap";
import player1 from '../../../Images/cricketLeague/shakib-al-hasan-792.png';
import player2 from '../../../Images/cricketLeague/mohammad-nabi-1313.png';
import player3 from '../../../Images/cricketLeague/chris-woakes-1056.png';
import player4 from '../../../Images/cricketLeague/rashid-khan-arman_636964742186305003.png';
import player5 from '../../../Images/cricketLeague/benjamin-andrew-stokes_636526681993441973.png';
import banner1 from '../../../Images/cricketLeague/CTH2_1920x1080_NoCTA.jpg';
import banner2 from '../../../Images/cricketLeague/CLUB-TICKETING-PROGRAM_social_1920x1080_Landscape.jpg';

const CricketLeague = () => {
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
                    <h2>Shakib Al Hasan </h2>
                    <h4>Bangladesh</h4>
                    
                     </div>

            </div>


            <div className="CricketLeague">

                <div className="images">
                <h1>02</h1>
                    <img src={player2} alt="" />
                </div>
                <div className="Text">
                    <h2>Mohammad Nabi</h2>
                    <h4>Afghanistan</h4>
                    
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
                    <h2>DRashid Khan</h2>
                    <h4>Afghanistan</h4>
                    
                     </div>

            </div>
            <div className="CricketLeague">

                <div className="images">
                    <h1>05</h1>
                    <img src={player5} alt="" />
                </div>
                <div className="Text">
                    <h2>Ben Stokes</h2>
                    <h4>England</h4>
                    
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

export default CricketLeague;