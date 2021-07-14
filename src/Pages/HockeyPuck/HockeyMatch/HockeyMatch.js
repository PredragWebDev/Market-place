import React from 'react';
import { Button, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './HockeyMatch.css';

const match = [
    {
        name: "Bangladesh",
        data: 'August 27, 2022',
        reName: "Canada",
        location: "San Paolo Stadium",
        img: "https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg",
        reimg: "https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg"
    }
];


const HockeyMatch = () => {
    console.log(match[0]);
    return (
        <Container className='FullMatch'>

        <div className="Match">

        <img style={{width: "100px", height: "50px"}} src={match[0].img} alt="" />
        <h1> {match[0].name}</h1>

        <h2> Vs</h2>
        </div>

        <div className="ReMatch">
            
        <img style={{width: "100px", height: "50px"}} src={match[0].reimg} alt="" />
        <h1> {match[0].reName}</h1>
        </div>

        <div className="Location">
            <p>{match[0].data}</p> <p>{match[0].location}</p>


          
        </div>
        <Link to="/booking" > <Button style={{background: "#E71E68", color: "#FFF", padding: "10px", border: "0px", marginTop: "20px"}}>TICKET BOOKING</Button></Link>


    </Container>
    );
};

export default HockeyMatch;