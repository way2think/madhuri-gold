// components/ContactForm.tsx
"use client";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classes from "./ContactForm.module.css"; // Adjust the path as necessary

const ContactForm = () => {
  return (
    <div className="py-5" style={{ background: "#ffff" }}>
      <Container>
        <h3 className={`${classes.getInTouch} mb-4 fw-bold`}>Get in Touch</h3>
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
              <Form.Control type="text" placeholder="Name" />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3 mb-lg-0">
              <Form.Control type="email" placeholder="Email" />
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3 mb-md-0">
              <Form.Control type="tel" placeholder="Phone" />
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Form.Control type="text" placeholder="Subject" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Control as="textarea" rows={5} placeholder="Your Message" />
            </Col>
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              variant="warning"
              type="submit"
              style={{
                backgroundColor: "#c17d1f",
                border: "none",
                padding: "10px 30px",
                color: "#fff",
                width: "50%",
              }}
            >
              Send Now
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
