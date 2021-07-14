import React from 'react';
import { Container } from 'react-bootstrap';
import './OurTeam.css';
const OurTeam = () => {
         return (
            <Container className='OurTeam'>
                      <h1 className="team-heading">Our Team</h1>
                       <div className="row ourTeam-gird">
                                {/* <div className="col-lg-3 col-12 "> */}
                                <div className="card our-taem-card">
                                    <img src="https://i.ibb.co/J5hzC2f/01-248x247.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body card-style">
                                    <div>
                                             <h2 className="player-number">18</h2>
                                    </div>
                                    <h5 className="card-title player-name">Danylo Tesenko</h5>
                                    <p className="card-text player-title">Entry Fragger</p>
                                    {/* </div> */}
                                    </div>
                                </div>
                                {/* <div className="col-lg-3 col-12"> */}
                                <div className="card">
                                    <img src="https://i.ibb.co/zFzs9BB/02-248x247.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body card-style ">
                                    <div>
                                             <h2 className="player-number">12</h2>
                                    </div>
                                    <h5 className="card-title player-name">Justin Leggatt</h5>
                                    <p className="card-text player-title">Entry Fragger</p>
                                    {/* </div> */}
                                    </div>
                                </div>
                                {/* <div className="col-lg-3 col-12"> */}
                                <div className="card">
                                    <img src="https://i.ibb.co/WF5DVP9/03-248x247.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body card-style">
                                    <div>
                                             <h2 className="player-number">11</h2>
                                    </div>
                                    <h5 className="card-title player-name">Tristian Holme</h5>
                                    <p className="card-text player-title">Refragger</p>
                                    {/* </div> */}
                                    </div>
                                </div>
                                {/* <div className="col-lg-3 col-12"> */}
                                <div className="card">
                                    <img src="https://i.ibb.co/Czyw3hY/04-248x247.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body card-style">
                                    <div>
                                             <h2 className="player-number">10</h2>
                                    </div>
                                    <h5 className="card-title player-name">John Woolley</h5>
                                    <p className="card-text player-title">Refragger</p>
                                    {/* </div> */}
                                    </div>
                                </div>
                                </div>    
                                </Container>
         );
};

export default OurTeam;