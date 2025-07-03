import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./CancellationPolicy.module.css"; // Reusing same CSS module

const CancellationPolicy = () => {
  return (
    <Container fluid className="py-5 px-3 px-md-5">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h1
            className={`${classes.heading} fw-bold mb-4 text-center text-md-start`}
          >
            Cancellation & Return Policy
          </h1>

          <h5 className={`fw-bold mb-2 ${classes.shippingheading}`}>
            Cancellation Policy
          </h5>
          <p className={`mb-4 ${classes.shippingpara}`}>
            When you are not satisfied with our product, Madhuri Gold Palace
            allows you to cancel your order online before the product has been
            shipped, your entire order amount will be refunded. <br />
            You can send the reason for the cancellation and Madhuri Gold Palace
            has to approve your request to process your cancellation. Approval
            will be based on valid reasons.
          </p>

          <h5 className={`fw-bold mb-2 ${classes.shippingheading}`}>
            Return Policy
          </h5>
          <p className={`mb-4 ${classes.shippingpara}`}>
            If for some reason you are not entirely satisfied with your product,
            Madhuri Gold Palace glad to sort out the problem or exchange the
            product. <br />
            Please see below for the terms and conditions of our exchange
            policies: <br />
            <strong>30 Day Exchange and Money Back policy:</strong> If you are
            not satisfied with your product, you could write us return it within
            30 days of receipt for a refund or exchange on the full Invoice
            value. You can return any of our products except for products that
            have been customized for you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CancellationPolicy;
