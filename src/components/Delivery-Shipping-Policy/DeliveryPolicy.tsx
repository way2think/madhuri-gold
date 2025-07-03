import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./DeliveryPolicy.module.css"; // Adjust the path as necessary

const DeliveryPolicy = () => {
  return (
    <Container fluid className="py-5 px-3 px-md-5">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h1
            className={`${classes.heading} fw-bold mb-4 text-center text-md-start`}
          >
            Delivery and Shipping Policy
          </h1>

          <h5 className={`fw-bold mb-2 ${classes.shippingheading}`}>Shipping policy</h5>
          <p className={`mb-4 ${classes.shippingpara}`}>
            Madhuri Gold Palace offers shipping on every order within India.
            Your order will be shipped to you with fully secured logistics
            system. We request the customers to inspect the delivered package
            for any damage or tamper before receiving or signing the receipt.
          </p>

          <h5 className={`fw-bold mb-2 ${classes.shippingheading}`}>Delivery</h5>
          <p className={`mb-4 ${classes.shippingpara}`}>
            Packages will be dispatched within 2 days of payment and are shipped
            via courier service. <br />
            The shipping fees include handling and packing fees as well as
            postage costs. The transport fees will vary and it is based on the
            total weight of the package. We suggest you to club your items in
            one order. If you place separate orders for a group of items, the
            shipping fees will apply to each of them. <br />
            Boxes are amply sized and your items are well-protected.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DeliveryPolicy;
