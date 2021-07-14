import React from 'react';
import {
    faFacebookF,
    faGooglePlusG,
    faTwitter,
    faWhatsapp,
    faYoutube,
    faInstagram,
    faTwitch
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import  './Footericon.css'
import { Col, Container, Row } from 'react-bootstrap';


const Footericon = () => {
    return (

        <div className='fonticon-main' >
            
            <div className='fonticon-info' >
                <FontAwesomeIcon className='fonticon-style'  icon={faFacebookF} />
            <h3 className='footericon-title'>FACEBOOK</h3>
            
            </div>
            <div className='fonticon-info'>
                <FontAwesomeIcon className='fonticon-style' icon={faTwitter} />
            <h3 className='footericon-title'>TWITTER</h3>
            
            </div>
            <div className='fonticon-info'>
                <FontAwesomeIcon className='fonticon-style' icon={faGooglePlusG} />
            <h3 className='footericon-title'>GOOGLE PLUS</h3>
            
            </div>
            <div className='fonticon-info'>
                <FontAwesomeIcon className='fonticon-style' icon={faYoutube} />
            <h3 className='footericon-title'>YOUTUBE</h3>
            
            </div>
            <div className='fonticon-info'>
                <FontAwesomeIcon className='fonticon-style' icon={faInstagram} />
            <h3  className='footericon-title'>INSTAGRAM</h3>
            
            </div>
            <div className='fonticon-info'>
                <FontAwesomeIcon className='fonticon-style' icon={faTwitch} />
            <h3 className='footericon-title'>TWITCH</h3>
            
            </div>
        </div>
    );
};

export default Footericon;