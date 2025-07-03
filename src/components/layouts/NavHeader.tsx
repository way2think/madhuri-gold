"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import classes from "../layouts/NavHeader.module.css";

function NavHeader() {
  return (
    <Navbar expand="lg" className={`${classes.navbar} bg-body-tertiary`}>
      <Container>
        <Navbar.Brand as="span">
          <Link href="/" className={classes.logo} passHref>
            <img src="madhurilogo.svg" alt="Logo" className={classes.logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Link href="/" className={classes.navItem}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/collections" className={classes.navItem}>
                Collections
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about-us" className={classes.navItem}>
                About Us
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="#" className={classes.navItem}>
                Our Policies
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact-us" className={classes.navItemcontact}>
                Contact Us
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
