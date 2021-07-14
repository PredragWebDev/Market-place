import React from 'react';
import './TableTennisLeague.css';
import {  Container, Row, Col } from "react-bootstrap";
import player1 from '../../../Images/TableTennisLeague/player1.webp';
import player2 from '../../../Images/TableTennisLeague/player2.webp';
import player3 from '../../../Images/TableTennisLeague/player3.webp';
import player4 from '../../../Images/TableTennisLeague/player4.webp';
import player5 from '../../../Images/TableTennisLeague/player5.webp';
import banner1 from '../../../Images/TableTennisLeague/TableTennisBanner1.jpg';
import banner2 from '../../../Images/TableTennisLeague/TableTennisBanner2.jpg';

const TableTennisLeague = () => {
    return (
        <Container>
            <Row style={{padding: "100px 0px 100px"}}>
    <Col xs={6}>
        <div>
            <h1 style={{width: "700px", marginBottom: "100px"}}><span className='color'>ATT</span>  Player Rankings For  <span className='color'>International</span></h1>
            <div className="CricketLeague">

                <div className="images">
                <h1>01</h1>
                    <img src={player1} alt="" />
                </div>
                <div className="Text">
                    <h2>MA Long</h2>
                    <h4>China</h4>
                    
                     </div>

            </div>


            <div className="CricketLeague">

                <div className="images">
                <h1>02</h1>
                    <img src={player2} alt="" />
                </div>
                <div className="Text">
                    <h2>Hugo CALDERANO</h2>
                    <h4>Brazil</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>03</h1>
                    <img src={player3} alt="" />
                </div>
                <div className="Text">
                    <h2>LIN Yun-Ju </h2>
                    <h4>Chinese Taipei</h4>
                    
                     </div>

            </div>

            <div className="CricketLeague">

                <div className="images">
                <h1>04</h1>
                    <img src={player4} alt="" />
                </div>
                <div className="Text">
                    <h2>Dimitrij OVTCHAROV</h2>
                    <h4>Germany</h4>
                    
                     </div>

            </div>
            <div className="CricketLeague">

                <div className="images">
                    <h1>05</h1>
                    <img src={player5} alt="" />
                </div>
                <div className="Text">
                    <h2>Darko JORGIC</h2>
                    <h4>Slovenia</h4>
                    
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

export default TableTennisLeague;