import React, { useState } from 'react';
import './Travel.css';
import { Button, Container, Modal } from 'react-bootstrap';



const Travel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='Travel img-fluid'>
            <Container>
                <h1>TRAVEL WITH THE TEAM
                    TO AN AWAY GAME</h1>

                <div className="text">
                    <p>
                        Polaroid squid flannel chillwave roof party prism green juice schlitz meditation vexillologist post-ironic hella umami cray.
                    </p>
                </div>

                <>
      <Button style={{color:'black'}} className='button' variant="primary" onClick={handleShow}>
      Read More
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body style={{color:'black'}}>Firstly we use navigation bar which is use to change route to go one page to another page
Display next match time and schedule with a card component.
Display information about each sport's history and its players' data. 
We used a card carousel to display our project.
Card display for live matches taking place (need to be updated accordingly)
Video streaming,using React .
A user can view all the products without logging into the website.
If a user wishes to purchase a product he has to first register himself and then he can log in into the website using his unique username and password.
A user can view his previous purchases in order summary, monitor his cart status in my cart, and he can also edit his details in the edit profile.
Ability to take feedback from the site's visitors and store them in the backend database</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
              
  
            </Container>
        </div>
    );
};

export default Travel;

