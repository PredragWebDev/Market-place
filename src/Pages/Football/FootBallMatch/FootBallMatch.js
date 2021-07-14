import React from 'react';
import { Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './FootBallMatch.css';


const match = [
    {
        name: "Napoli",
        data: 'August 7, 2022',
        reName: "Juventus",
        location: "San Paolo Stadium",
        img: "https://a6e8z9v6.stackpathcdn.com/bigslam/homepages/soccer01/wp-content/uploads/sites/2/2019/09/flag-20.png",
        reimg: "https://a6e8z9v6.stackpathcdn.com/bigslam/homepages/soccer01/wp-content/uploads/sites/2/2019/09/flag-4.png"
    }
// },
// {
//     name: "Napoli",
//     data: 'August 7, 2022',
//     reName: "Juventus",
//     location: "San Paolo Stadium"
// },
// {
//     name: "Napoli",
//     data: 'August 7, 2022',
//     reName: "Juventus",
//     location: "San Paolo Stadium"
// }

];



const FootBallMatch = () => {
    console.log(match[0]);
    return (
        <Container className='FullMatch'>

            <div className="Match">

            <img src={match[0].img} alt="" />
            <h1> {match[0].name}</h1>

            <h2>VS</h2>
            </div>

            <div className="ReMatch">
                
            <img src={match[0].reimg} alt="" />
            <h1> {match[0].reName}</h1>
            </div>

            <div className="Location">
                <p>{match[0].data}</p> <p>{match[0].location}</p>


              
            </div>
            <Link to="/booking" > <Button style={{background: "#E71E68", color: "#FFF", padding: "10px", border: "0px", marginTop: "20px"}}>TICKET BOOKING</Button></Link>


        </Container>
    );
};

export default FootBallMatch;