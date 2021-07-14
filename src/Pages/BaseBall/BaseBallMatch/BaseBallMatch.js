import React from 'react';
import { Card } from 'react-bootstrap';
import img1 from '../../../Images/iconCricket/australia.png';
import img3 from '../../../Images/iconCricket/india.png';
import { default as img2, default as img4 } from '../../../Images/iconCricket/new-zealand.png';
import img5 from '../../../Images/iconCricket/pakistan.png';
import './BaseBallMatch.css';

const BaseBallMatch = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();


    return (
        <div style={{ height: '350px' }} className="container ">
            <div className="row text-dark">
                <div className="col-md-6  d-flex justify-content-center align-items-center">
                    <Card className=' my-5' style={{ width: '100%' }}>

                        <Card.Body>
                            <Card.Title className='text-uppercase lh-lg' style={{ color: '#FFC722', }}> <strong>Next</strong> Match  </Card.Title>
                            <div className="d-flex justify-content-center ms-5">
                                <hr className=' ms-5' style={{ color: '#FFC722', width: '350px', marginTop: '-27px', padding: '1px', fontWeight: '900' }} />
                            </div>
                            <Card.Text>
                                <p style={{ background: '#F2F2F2' }} className='ms-5 fs-5 p-3 fw-normal'>Date : {date} Time: {time}</p>

                            </Card.Text>
                            <div className="d-flex justify-content-evenly align-items-center">
                                <img className='logoimage' src={img1} alt="" />
                                <h3 style={{ fontSize: '20px' }}>Australia</h3>
                                <h3 style={{ fontSize: '20px', backgroundColor: '#FFC722', padding: '10px' }}> VS </h3>
                                <h3 style={{ fontSize: '20px' }}>New Zealand</h3>
                                <img className='logoimage' src={img2} alt="" />


                            </div>
                            <Card.Text style={{ fontWeight: '200', }} className='text-center '>
                                October 12, 20227:00 pm <br />
                                Cambridgeshire UK
                            </Card.Text>

                        </Card.Body>

                    </Card>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <Card className='' style={{ width: '100%', height: '250px', background: '#363533' }}>

                        <table className="table table-hover table-bordered  ">
                            <tr className='text-white p-3 p-4'>


                                <div className="d-flex justify-content-evenly align-items-center">
                                    <td className=''>19, Octomber, 2022</td>
                                    <img className='logoimage2' src={img3} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>India</h3>
                                    <h3 style={{ fontSize: '27px', color: '#FFC722', padding: '10px' }}> VS </h3>
                                    <h3 style={{ fontSize: '16px' }}>New-zealand</h3>
                                    <img className='logoimage2' src={img4} alt="" />


                                </div>
                            </tr>
                            <tr className='text-white  '>

                                <div className="d-flex justify-content-evenly align-items-center">
                                    <td className=''>21, Octomber, 2022</td>

                                    <img className='logoimage2' src={img1} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>Australia</h3>
                                    <h3 style={{ fontSize: '27px', color: '#FFC722', padding: '10px' }}> VS </h3>
                                    <h3 style={{ fontSize: '16px' }}>Pakistan</h3>
                                    <img className='logoimage2' src={img5} alt="" />


                                </div>
                            </tr>
                        </table>

                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BaseBallMatch;