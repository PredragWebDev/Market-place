import React from 'react';
import './Banner.css';
import banner from '../../../Images/FootBall/Players/football-banner-1.jpg';
import { Button, Container, Row, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='Banner'>
            <img src={banner} alt="" />
            
            <Container>
            <div className="Shap">


            </div>
            <div className="Text">
                <h1 className='football-banner-text'>Find and Download Free Graphic Resources for Football Banner</h1>
                <p>Football Schedule · English Premier League · Spanish LaLiga · Italian Serie A · German Bundesliga · French Ligue 1 · English League Championship ·</p>
                <Link style={{textDecoration: "none"}} to="/booking"><Button>NEXT MATCH</Button></Link>

            </div>
            </Container>
            
        </div>
    );
};

export default Banner;