import { faRegistered, faTicket, faPhone, faMailBulk , faReceipt,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import "./topNavbar.css";
const TopNavbar = () => {
  const [subNavOpen,setSubNavOpen] = useState(false);

  return (
    <div >
      {/* style={{ backgroundColor: "#212529" }} */}
       <Container>
        <Row className="top-navbar">
          <div className="col-md-6">
            <div className="div">
            <FontAwesomeIcon  style={{ color: "#00008b" , fontSize: "20px", marginRight: "10px", marginTop: "10px" }} icon={faPhone} />+8801648308424
            <FontAwesomeIcon style={{ color: "#00008b", fontSize: "20px",  marginLeft: "20px", marginRight: "10px", marginTop: "10px" }} icon={faMailBulk} /> dev.abdurrahman01@gmail.com

            </div>
          </div>

          <div className="col-md-6 text-end">
          <Link to="/dashboard/contest/start">
              <span className="top-right-part bg-warning">
                <FontAwesomeIcon icon={faTicket} /> PLAY CONTEST 
              </span>
            </Link>

        <Link to="/dashboard/contest/result">
              <span className="top-right-part bg-success">
                <FontAwesomeIcon icon={faTicket} /> CONTEST RESULT 
              </span>
            </Link>

            <Link to="/booking">
              <span className="top-right-part bg-warning">
                <FontAwesomeIcon icon={faTicket} /> TICKET BOOKING
              </span>
            </Link>
            <Link to="/event-register">
              <span className="top-right-part bg-success ">
                <FontAwesomeIcon icon={faRegistered} /> EVENT REGISTER
              </span>
            </Link>
          </div>

          
          {
            subNavOpen && <div className="col-md-6 text-end">
           
            <Link to="/dashboard2/contest/start">
                <span className="top-right-part ">
                  <PlayArrowIcon className="topNaver-icon" icon={faTicket} /> PLAY CONTEST
                </span>
              </Link>
  
          <Link to="/dashboard2/contest/result">
                <span className="top-right-part ">
                  <FontAwesomeIcon className="topNaver-icon" icon={faReceipt} /> CONTEST RESULT
                </span>
              </Link>
  
              <Link to="/booking">
                <span className="top-right-part ">
                  <FontAwesomeIcon className="topNaver-icon"  icon={faTicket} /> TICKET BOOKING
                </span>
              </Link>
              <Link to="/event-register">
                <span className="top-right-part ">
                  <FontAwesomeIcon className="topNaver-icon" icon={faRegistered} />EVENT REGISTER
                </span>
              </Link>
              
              <div>
              
              </div>
            </div>
          }
            <div className="top-banner-contest">
        {
          subNavOpen ? <CancelPresentationIcon className="top-banner-link"   onClick={()=>setSubNavOpen(false)}>X</CancelPresentationIcon> : <MenuOpenIcon className="top-banner-link"   onClick={()=>setSubNavOpen(true)}>open</MenuOpenIcon>
        }
      </div>
          

        </Row>
      </Container>
      
      {/* style={{position:'absolute' , top:'10px' , right:'310px'}} */}
    
    </div>
  );
};

export default TopNavbar;
