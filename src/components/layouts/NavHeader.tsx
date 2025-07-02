"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "../layouts/NavHeader.module.css";

function NavHeader() {
  return (
    <Navbar expand="lg" className={`${classes.navbar} bg-body-tertiary`}>
      <Container>
        <Navbar.Brand href="/">
          <img src="madhurilogo.svg" alt="Logo" className={`${classes.logo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className={classes.navItem}>
              Home
            </Nav.Link>
            <Nav.Link href="#" className={classes.navItem}>
              Collections
            </Nav.Link>
            <Nav.Link href="/about-us" className={classes.navItem}>
              About Us
            </Nav.Link>
            <Nav.Link href="#" className={classes.navItem}>
              Our Policies
            </Nav.Link>
            <Nav.Link href="#" className={classes.navItemcontact}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
