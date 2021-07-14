import React from 'react';
import './WorkHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFootball,
    faHockeyPuck,
    faTableTennis,
    faBaseball,
    faBasketball,
    faVolleyballBall, 
    
  } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const WorkHome = () => {
    return (
        <Container>
        <div className='WorkHome'>
           
            <h1 className='work-home-title'>New Responsive  Gaming Category Development for Desktop &amp; Mobile Devices</h1>


            <div className='WorkHomeMain'>

        <div>
            <Link style={{textDecoration: "none", color: "#000"}} to='/football'>
        <div className="WorkText">
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faFootball} />
         <h2>Football</h2>
         <p>This article is about all forms of football. For specific codes of football and other uses of the term,</p>
         </div>
         </Link>
        </div>


        <div >
        <Link style={{textDecoration: "none", color: "#000"}} to='/cricket'>
        <div className="WorkText">
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faHockeyPuck} />
        <h2>Cricket</h2>
        <p>Cricket is a bat-and-ball game played between two teams of eleven players each on a field at the centre ... </p>
        </div>
        </Link>
        </div>


        
        <div>
        <Link style={{textDecoration: "none", color: "#000"}} to='/tableTennis'>
        <div className="WorkText">
        <div className="WorkShap"></div>  
       
        <FontAwesomeIcon className='icon' icon={faTableTennis} />
        <h2>Table Tennis</h2>
        <p>Table tennis, also known as ping-pong and whiff-whaff, is a sport in which two or four players hit a lightweight ball</p>
        </div>
        </Link>
         </div>

         <div >

         <Link style={{textDecoration: "none", color: "#000"}} to='/baseBall'>
        <div className="WorkText">
        <div className="WorkShap"></div>  
       
        <FontAwesomeIcon className='icon' icon={faBaseball} />
        <h2>Base Ball</h2>
        <p>baseball, game played with a bat, a ball, and gloves between two teams of nine players </p>
        </div>
        </Link>
         </div>


         <div>
         <Link style={{textDecoration: "none", color: "#000"}} to='/basketBall'>
        <div className="WorkText"> 
        <div className="WorkShap"></div>
       
        <FontAwesomeIcon className='icon' icon={faBasketball} />
        <h2>Basket Ball</h2>
        <p> Basketball is a game played between two teams of five players each on a rectangular court

        </p>
        </div>
        </Link>
         </div>

         <div>
         <Link style={{textDecoration: "none", color: "#000"}} to='/volleyBall'>
        <div className="WorkText">  
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faVolleyballBall} />
        <h2>Volley Ball</h2>
        <p>Volleyball is a team sport in which two teams of six players are separated by a net. </p>
        </div>
         </Link>
         </div>
         
        </div>

        </div>
        </Container>
    );
};

export default WorkHome;