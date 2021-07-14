import {
    faComment,
    faShareNodes,
    faTag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { Button, Container, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../Hook/UseAuth";
import Navigation from "../Shared/Navigation/Navigation";

const ContestsRegister = () => {
    const { isLoading,user} = useAuth()
    const {reset} = useForm()
    const navigate = useNavigate();

    const formDataAll = { name: '', email: '', contact_email: '', contact_number: '',event_name: "", contest_date: "", lavel: "", playing_ctg: "", user_city: "", user_address: ""};
    const [formData, setFormData] = useState(formDataAll);

    const onBlurHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newFormData = { ...formData };
        newFormData[name] = value;
        newFormData.email = user?.email;
        setFormData(newFormData);
      };
      
      const onSubmitHandler = data => {
        data.preventDefault();
        const newDispalyReviwe = {
          ...formData
        }

        const perticipantRegInfo = { 
            name: newDispalyReviwe.name, 
            email: newDispalyReviwe.email, 
            contact_email: newDispalyReviwe.contact_email,
            contact_number: newDispalyReviwe.contact_number,
            event_name: newDispalyReviwe.event_name, 
            contest_date: newDispalyReviwe.contest_date, 
            lavel: newDispalyReviwe.lavel, 
            playing_ctg: newDispalyReviwe.playing_ctg, 
            user_city: newDispalyReviwe.user_city, 
            user_address: newDispalyReviwe.user_address
          }
          
    // https://blooming-thicket-66783.herokuapp.com/contextRegister
        fetch('https://blooming-thicket-66783.herokuapp.com/contest/participant', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(perticipantRegInfo)
        })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if (data.insertedId) {
              alert("Thank You, Your Register was Completed")
              reset()
              navigate("/")
            }else if (data?.error) {
              alert(`${data?.error?.message}`)
            }
          });
    
      }
  


    return (

        <div style={{zIndex:99}}>

        <div style={{zIndex: "24"}}>

        <Navigation />
        
        <div className="booking-container container">
          <div className="ticket-booking-container">
            <div className="text-center">
              <h1 className="text-uppercase">
                Register Your <span className="text-warning">Context now!</span>
              </h1>
              <p>
                Feel the thrill of seeing a global sporting event in one of the
                world's most incredible cities. Headlining the calendar is the
                Dubai World Cup.
              </p>
              <h3>Time</h3>
            </div>
  
            {!isLoading && 
            <form onSubmit={onSubmitHandler} className="mt-4" >
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Your Name</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="text"
                  placeholder="Type your name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Your Email</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="email"
                  placeholder="Type your date"
                  name="email"
                  value={user?.email}
                  readOnly
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Contact Email</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="email"
                  placeholder="Type your date"
                  name="contact_email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Mobile Number</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="number"
                  placeholder="Type your date"
                  name="contact_number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Event Name</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="text"
                  placeholder="Type your date"
                  name="event_name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Contest Date</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="date"
                  placeholder="Type your date"
                  name="contest_date"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Lavel</Form.Label>
                <Form.Select onChange={onBlurHandler}   name="lavel" required>
                  <option>Select-label</option>
                  <option>Easy</option>
                  <option>Normal</option>
                  <option>Hard</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Context-Category</Form.Label>
                <Form.Select onChange={onBlurHandler} name="playing_ctg" required>
                  <option>Select Category</option>
                  <option>Football</option>
                  <option>Cricket</option>
                  <option>Base-Ball</option>
                  <option>Basket-Ball</option>
                  <option>Table Tennis</option>
                  <option>Hockey Puck</option>
                  <option>Volley Ball</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">City</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  type="text"
                  placeholder="Type your City"
                  name="user_city"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0">Address</Form.Label>
                <Form.Control
                  onChange={onBlurHandler}
                  as="textarea"
                  rows={3}
                  placeholder="Type your address"
                  name="user_address"
                  required
                />
              </Form.Group>
  
              <Form.Group className="mb-3 input-box">
                <Form.Label className="mb-0"></Form.Label>
                <Button className="fw-bold w-100" style={{ background: "#e40046" }} type="submit">
                  SUBMIT
                </Button>
              </Form.Group>
            </form> }
  
  
            {isLoading &&   <Spinner animation="border" variant="secondary" />}
          </div>
        </div>
        <div className="next-match-container">
          <Container className="p-5">
            <Row>
              <div className="col-md-2 text-center">
                <p>Next Match</p>
                <h1
                  style={{ fontSize: "5rem" }}
                  className="text-warning fw-bold my-0"
                >
                  25
                </h1>
                <p>May 2022 </p>
              </div>
              <div className="col-md-8 next-match-info-sec">
                <h4 className="text-uppercase">
                  Western Sydney wanderers vs urawa red diamonds
                </h4>
                <p>
                  In efficitur nisi et condimentum mattis. Duis et aliquet purus,
                  quis congue elit. Cras volutpat dapibus molestie. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Donec posuere mollis augue, a accumsan libero
                  egestas sit amet.Vestibulum posuere erat tortor, porta tempus
                  leo condimentum sed.
                </p>
              </div>
              <div className="col-md-2 social-box">
                <p>
                  <FontAwesomeIcon icon={faComment} /> Comments
                </p>
                <p>
                  <FontAwesomeIcon icon={faTag} /> Tags
                </p>
                <p>
                  <FontAwesomeIcon icon={faShareNodes} /> Shares
                </p>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      </div>
    );
};

export default ContestsRegister;