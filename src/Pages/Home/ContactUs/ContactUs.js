import React, { useState } from 'react';
import './ContactUs.css';
import { Button,  Form } from "react-bootstrap";
import {
    faMailBulk,
    faLocation,
    faPhone,
    
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from '../../Shared/Navigation/Navigation';

const ContactUs = () => {

    
    const [formData, setFormData] = useState({});
    const onBlurHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };
  const onSubmitHandler = (e) => {

      e.preventDefault();
      console.log(formData);
      const body = {
        email: formData.email,
        message: formData.address
      }
  
      fetch("https://blooming-thicket-66783.herokuapp.com/player/sendEmail",{
      // fetch("http://localhost:7000/player/sendEmail",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(body)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.messageId) {
          alert("Your email is received")
        }
      })
    };

    return (
        <div className='ContactUs'>
        <Navigation />
        <h1>Contact Us</h1>
        
        <p>We'd love to get to know you and learn how we can help, so please get in touch, or request a call back.</p>
        <p>Fill in the form or choose one of the options below for a swift response.
</p>


<div className='Contact'>
    <div className='ContactText'>
      <p>When calling, please be ready to share a little about your business to help us understand how we might help.</p>
      <p>Everything you tell – unless demonstrably unlawful – will be treated as completely confidential.</p>

        <div className="call">
        <p><FontAwesomeIcon className="FbIcon" icon={faMailBulk} />  Exbens.com@gmail.com</p>
            <p> <FontAwesomeIcon className="FbIcon" icon={faLocation} />   Matisa lela 29-15 Riga , Latvis</p>
            <p><FontAwesomeIcon className="FbIcon" icon={faPhone} />  + 37122001544</p>
            
            
        </div>

    </div>
    <div className='ContactImage'>
    <div className="ticket-booking-container">
      
      <form className="mt-4 contact-from" onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3 input-box">
          <Form.Label className="mb-0">Full name</Form.Label>
          <Form.Control
            onChange={onBlurHandler}
            type="text"
            placeholder="Type your name"
            name="name"
            required
          />
        </Form.Group>


        <Form.Group className="mb-3 input-box">
          <Form.Label className="mb-0">Game Name</Form.Label>
          <Form.Control
            onChange={onBlurHandler}
            type="text"
            placeholder="The Business is called..."
            name="city"
            required
          />
        </Form.Group>


        <Form.Group className="mb-3 input-box">
          <Form.Label className="mb-0">Number</Form.Label>
          <Form.Control
            onChange={onBlurHandler}
            type="number"
            placeholder="Type your number"
            name="number"
            required
          />
        </Form.Group>


        <Form.Group className="mb-3 input-box">
          <Form.Label className="mb-0">email</Form.Label>
          <Form.Control
            onChange={onBlurHandler}
            type="email"
            placeholder="Type your email"
            name="email"
            required
          />
        </Form.Group>
        


        <Form.Group className="mb-3 input-box">
          <Form.Label className="mb-0">Date</Form.Label>
          <Form.Control
            onChange={onBlurHandler}
            type="date"
            placeholder="Type your date"
            name="date"
            required
          />
        </Form.Group>
        


        <Form.Group className="mb-3 input-box">
          <Form.Label className="mb-0">Message</Form.Label>
          <Form.Control
            onChange={onBlurHandler}
            as="textarea"
            rows={3}
            placeholder="Please provide me more information"
            name="address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 input-box">
          <Form.Label className="mb-0"></Form.Label>
          <Button className="fw-bold w-100" type="submit">
            SUBMIT
          </Button>
        </Form.Group>
      </form>
    </div>
  

    </div>
  </div>










    </div>
    );
};

export default ContactUs;