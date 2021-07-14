import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hook/UseAuth";
import logo from "../../../Images/logo.png";
import TopNavbar from "../TopNavbar/TopNavbar";

import "./Navigation.css";

const Navigation = () => {

  const { user, logOut } = useAuth();
  
  return (
    <div>
        <TopNavbar/> 
      <Navbar bg="" variant="" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <NavLink to="/home">
            <img width="120px" src={logo} alt="" />{" "}
          </NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="link-style ms-auto" as={Link} to="/home">
              <h5 className="text-style">HOME</h5>
            </Nav.Link>

            <NavDropdown
              style={{
                fontSize: "22px",
                marginBottom: "7px",
                fontWeight: "600",
                color: "#dc3545 !important ",
              }}
              title="PAGES"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/football">
                Football
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cricket">
                Cricket
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hockeyPuck">
                Hockey Puck
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tableTennis">
                Table Tennis
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/baseBall">
                Base Ball
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basketBall">
                Basket Ball
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/volleyBall">
                Volley Ball
              </NavDropdown.Item>
            </NavDropdown>
            <HashLink className="link-style" to="#shop">
              <h5 className="text-style">SHOP</h5>
            </HashLink>

            <HashLink className="link-style" to="#news">
              <h5 className="text-style">NEWS</h5>
            </HashLink>

            <Nav.Link className="link-style" as={Link} to="/contact">
              <h5 className="text-style">CONTACT</h5>
            </Nav.Link>

            {user?.email ? (
              <div className="d-flex">
                <Nav.Link className="link-style" as={Link} to="/dashboard2">
                  <h5 className="text-style">DASHBOARD</h5>
                </Nav.Link>
                <h5
                  onClick={logOut}
                  style={{
                    cursor: "pointer",
                    marginLeft: "51px",
                    marginTop: "30px",
                  }}
                  className="text-style"
                >
                  LOGOUT
                </h5>
              </div>
            ) : (
              <Nav.Link className="link-style" as={Link} to="/login">
                <h5 className="text-style">LOGIN</h5>
              </Nav.Link>
            )}

            {/* <Nav.Link className='link-style cart-button' as={Link} to="/dashbord/home"><img src={cartlogo} width="50px" alt="" /> </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
