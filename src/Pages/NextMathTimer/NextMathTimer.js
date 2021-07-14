import React from 'react';
import { Card } from 'react-bootstrap';
import img2 from '../../Images/club_logo8.png';
import img1 from '../../Images/logo4.png';
const NextMathTimer = () => {


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
                                <h3 style={{ fontSize: '20px' }}>UVANTUS</h3>
                                <h3 style={{ fontSize: '20px', backgroundColor: '#FFC722', padding: '10px' }}> VS </h3>
                                <h3 style={{ fontSize: '20px' }}>Chalenger</h3>
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
                                    <td className=''>Octomber 12 2022</td>
                                    <img className='logoimage2' src={img1} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>UVANTUS</h3>
                                    <h3 style={{ fontSize: '27px', color: '#FFC722', padding: '10px' }}> VS </h3>
                                    <h3 style={{ fontSize: '16px' }}>Chalenger</h3>
                                    <img className='logoimage2' src={img2} alt="" />


                                </div>
                            </tr>
                            <tr className='text-white  '>

                                <div className="d-flex justify-content-evenly align-items-center">
                                    <td className=''>Octomber 12 2022</td>

                                    <img className='logoimage2' src={img1} alt="" />
                                    <h3 style={{ fontSize: '16px' }}>UVANTUS</h3>
                                    <h3 style={{ fontSize: '27px', color: '#FFC722', padding: '10px' }}> VS </h3>
                                    <h3 style={{ fontSize: '16px' }}>Chalenger</h3>
                                    <img className='logoimage2' src={img2} alt="" />


                                </div>
                            </tr>
                        </table>

                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NextMathTimer;