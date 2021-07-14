import React from 'react';
import {  Container, Row, Col } from "react-bootstrap";
import image1 from '../../../Images/FootballLeague/Lionel-Messi-PNG-Image-File.png';
import image2 from '../../../Images/FootballLeague/cristianoronaldo-cr7-juve-juventus-ronaldo-cr7-with-jersey-juventus-clothing-apparel-shirt-person-transparent-png-50663.png';
import image3 from '../../../Images/FootballLeague/dfl-obj-00000m-dfl-clu-00000g-dfl-sea-0001k5.png';
import image4 from '../../../Images/FootballLeague/fa941c1a524e594bccaffcd10577f86b.png';
import image5 from '../../../Images/FootballLeague/109-1099816_neymar-jr-png-face-imagenes-de-neymar-jr.png';
import banner1 from '../../../Images/FootballLeague/A1144-0.jpg';
import banner2 from '../../../Images/FootballLeague/Women-Header.jpg.adapt.crop16x9.575p.jpg';


import './FootBallLeague.css';

const FootBallLeague = () => {
    return (
        <Container>

            {/* <Row style={{padding: "100px 0px 100px"}}> */}
            <div className='Football-league-main' style={{padding: "100px 0px 100px"}}>
    {/* <Col xs={6}> */}

          

        <div className='football-reague-details'>
            <h1 style={{marginBottom: "100px"}}><span className='color'>FIFA </span>Top  Players <span className='color'>Rankings</span> </h1>
            <div className="PlayersLeg">

                <div className="images">
                <h1>01</h1>
                    <img src={image1} alt="" />
                </div>
                <div className="Text">
                    <h2>Lionel Messi</h2>
                    <h4>Paris Saint-Germain F.C.</h4>
                    
                     </div>

            </div>


            <div className="PlayersLeg">

                <div className="images">
                <h1>02</h1>
                    <img src={image2} alt="" />
                </div>
                <div className="Text">
                    <h2>Cristiano Ronaldo</h2>
                    <h4>Manchester United</h4>
                    
                     </div>

            </div>

            <div className="PlayersLeg">

                <div className="images">
                <h1>03</h1>
                    <img src={image3} alt="" />
                </div>
                <div className="Text">
                    <h2>Robert Lewandowski</h2>
                    <h4> FC Barcelona</h4>
                    
                     </div>

            </div>

            <div className="PlayersLeg">

                <div className="images">
                <h1>04</h1>
                    <img src={image4} alt="" />
                </div>
                <div className="Text">
                    <h2>Kevin de Bruyne</h2>
                    <h4>Chelsea</h4>
                    
                     </div>

            </div>

            <div className="PlayersLeg">

                <div className="images">
                <h1>05</h1>
                    <img src={image5} alt="" />
                </div>
                <div className="Text">
                    <h2>Neymar Jr</h2>
                    <h4>Paris Saint-Germain F.C.</h4>
                    
                     </div>

            </div>
            
            
            
        </div>
    {/* </Col> */}


    {/* <Col  xs={6}> */}

  

        <div className='ImageBanner'>
            <img style={{marginTop: '170px', marginBottom: "50px"}} src={banner1} alt="" />
            <img style={{margin: '0px'}} src={banner2} alt="" />
        </div>
    {/* </Col> */}
    </div> 
    {/* </Row> */} 
        </Container>
    );
};

export default FootBallLeague;