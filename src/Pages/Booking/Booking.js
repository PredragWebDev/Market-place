import {
    faComment,
    faShareNodes,
    faTag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Form, Row, Spinner } from "react-bootstrap";
import useAuth from "../../Hook/UseAuth";
import Navigation from "../Shared/Navigation/Navigation";
import "./booking.css";


const Booking = () => {


  const { isLoading} = useAuth()

  const formDataAll = { name: '', email: '', number: '', date: '', city: "", address: "", status: "pending" };

  const [formData, setFormData] = useState(formDataAll);



  const onBlurHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
    console.log(formDataAll);
  };




  const onSubmitHandler = data => {
    data.preventDefault();



    const newDispalyReviwe = {
      ...formData
    }
console.log(newDispalyReviwe);
    fetch('https://blooming-thicket-66783.herokuapp.com/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newDispalyReviwe)
    })
      .then(res => res.json())
      .then(data => console.log(data));




      if(newDispalyReviwe){
        alert("Thank You, Your Ticket IS Booking")
      }

  }



  return (
    <div>
      <Navigation />
      
      <div className="booking-container container">
        <div className="ticket-booking-container">
          <div className="text-center">
            <h1 className="text-uppercase">
              Ticket booking <span className="text-warning">opens now</span>
            </h1>
            <p>
              Feel the thrill of seeing a global sporting event in one of the
              world's most incredible cities. Headlining the calendar is the
              Dubai World Cup.
            </p>
          </div>

          {!isLoading && 
          <form className="mt-4" onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Name</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="Type your name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">E-mail</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="email"
                placeholder="Type your email"
                name="email"
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
              <Form.Label className="mb-0">City</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="Type your City"
                name="city"
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
                name="address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0"></Form.Label>
              <Button style={{ background: "#e40046" }} className="fw-bold w-100" type="submit">
                SUBMIT
              </Button>
            </Form.Group>
          </form>} :

          {/* {!formDataAll && <div class="alert alert-success" role="alert">
  user create successfully!
</div>}  */}

          
          {isLoading &&   <Spinner animation="border" variant="secondary" />}
         
        </div>
      </div>
      <div className="next-match-container">
        <Container className="p-5">
          <Row>
            <div className="col-md-2 text-center">
              <p>Next Match</p>
              <h1
                style={{ fontSize: "5rem", }}
                className="fw-bold my-0 text-warning"
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
  );
};

export default Booking;
