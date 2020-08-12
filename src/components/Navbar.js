import React from "react";
import useWindowSize from "../helpers/useWindowSize";
import navbar from "../assets/images/navbar.png";
import { Navbar, Nav } from "react-bootstrap";

export default function () {
  const [width, height] = useWindowSize();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="#home">
        <img
          src={navbar}
          style={{
            maxWidth: width <= 1024 && height <= 1024 ? "35vw" : "15vw",
            marginLeft: !(width <= 1024 && height <= 1024) && "7vw",
          }}
          alt="navbar"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link
            className={
              width <= 1024 && height <= 1024 ? "sidenav-mobile" : "sidenav"
            }
            href="#home"
          >
            HOME
          </Nav.Link>
          <Nav.Link
            className={
              width <= 1024 && height <= 1024 ? "sidenav-mobile" : "sidenav"
            }
            href="#about"
          >
            ABOUT US
          </Nav.Link>
          <Nav.Link
            className={
              width <= 1024 && height <= 1024 ? "sidenav-mobile" : "sidenav"
            }
            href="#faq"
          >
            FAQ
          </Nav.Link>
          <Nav.Link
            className={
              width <= 1024 && height <= 1024 ? "sidenav-mobile" : null
            }
            style={{
              backgroundColor: !(width <= 1024 && height <= 1024) && "orange",
              color: !(width <= 1024 && height <= 1024) && "white",
              fontWeight: !(width <= 1024 && height <= 1024) && "bolder",
              marginRight: !(width <= 1024 && height <= 1024) && "5vw",
            }}
            href="#contact"
          >
            CONTACT US
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
