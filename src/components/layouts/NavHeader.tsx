"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import classes from "../layouts/NavHeader.module.css";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

function NavHeader() {
  return (
    <Navbar expand="lg" className={`${classes.navbar} bg-body-tertiary`}>
      <Container className={classes.container}>
        <Navbar.Brand as="span">
          <Link href="/" className={classes.logo} passHref>
            <img src="/madhurilogo.svg" alt="Logo" className={classes.logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mt-2">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            <Nav.Item className={classes.navItemmobile}>
              <Link href="/" className={classes.navItem}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className={classes.navItemmobile}>
              <Link href="/collections?metal=gold" className={classes.navItem}>
                Gold
              </Link>
            </Nav.Item>
            <Nav.Item className={classes.navItemmobile}>
              <Link href="/collections?metal=diamond" className={classes.navItem}>
                DIAMOND
              </Link>
            </Nav.Item>
            <Nav.Item className={classes.navItemmobile}>
              <Link href="/collections?metal=silver" className={classes.navItem}>
                SILVER
              </Link>
            </Nav.Item>
            <Nav.Item className={classes.navItemmobile}>
              <Link href="/collections" className={classes.navItem}>
                Collections
              </Link>
            </Nav.Item>
            <Nav.Item className={classes.navItemmobile}>
              <Link href="/about-us" className={classes.navItem}>
                About Us
              </Link>
            </Nav.Item>
            <NavDropdown
              title="Our Polices"
              id="basic-nav-dropdown"
              className={`${classes.NavDropdown} p-0`}
              style={{ padding: 0, color: "#000" }}
            >
              <NavDropdown.Item as="span">
                <Link
                  href="/privacy-policy"
                  className={classes.navDropdownItem}
                >
                  Privacy Policy
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="span">
                <Link
                  href="/terms-and-conditions"
                  className={classes.navDropdownItem}
                >
                  Terms & Conditions
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="span">
                <Link
                  href="/delivery-and-shipping-policy"
                  className={classes.navDropdownItem}
                >
                  Delivery & Shipping Policy
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="span">
                <Link
                  href="/cancellation-and-return-policy"
                  className={classes.navDropdownItem}
                >
                  Cancellation and Return Policy
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item
              className={classes.navItemmobile}
              style={{ marginLeft: "20px" }}
            >
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
