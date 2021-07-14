import React from 'react';
import { Button, Container} from 'react-bootstrap';
import './BookingTactk.css';
import { Link } from 'react-router-dom';

const BookingTactk = () => {
    return (
       

            <Container>
                <div className="BookingPart">
                        <div className="Text">
                        <h1>Why are you still waiting?</h1>
                    <p>Our <span style={{color: "#E71E68"}} >TICKET BOOKING OPENS NOW </span></p>
                        </div>
                        
                        <div className="Bottun">
                            <Link to="/booking" > <Button style={{background: "#E71E68", color: "#FFF", padding: "10px", border: "0px", marginTop: "20px"}}>TICKET BOOKING</Button></Link>
                        </div>
                        <div className="Number">
                            <h2><span style={{color: "#E71E68", marginTop: "0px", display: "block"}} >25 </span> March 2022</h2>
                        </div>
                </div>

            </Container>
       
    );
};

export default BookingTactk;