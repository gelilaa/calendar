import React from "react";
import { Navbar, Image, Container, Row, Col} from 'react-bootstrap'
import logo from "../assets/unnamed.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const NavBar = () => {
  return (
    <Row>
      <Col className="header-logo">
        <Image src={logo} rounded className="logo" />
      </Col>
      <Col text-center className="text">HackYourFuture Lab @ Antwerp Class Calendar</Col>
    </Row>
  );
}

export default NavBar