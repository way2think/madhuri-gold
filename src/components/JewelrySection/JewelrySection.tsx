"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./JewelrySection.module.css";

interface JewelrySectionProps {
  bannerImage: string;

  bannerTextImage: string;
  bannerSecondTextImage?: string;
}

const JewelrySection: React.FC<JewelrySectionProps> = ({
  bannerImage,

  bannerTextImage,
  bannerSecondTextImage,
}) => {
  return (
    <Container fluid className="py-5 px-3 px-md-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <img
            src={bannerTextImage}
            alt="Banner"
            className="img-fluid rounded"
          />
          {bannerSecondTextImage && (
            <img
              src={bannerSecondTextImage}
              alt="Banner"
              className="img-fluid rounded"
            />
          )}
        </Col>
        <Col md={4} className="text-center">
          <img src={bannerImage} alt="Banner" className="img-fluid rounded" />
        </Col>
        <Col md={2} className="text-center">
          <img
            src="/assets/images/star.svg"
            alt="Necklace Set"
            width={100}
            height={100}
            className={`mb-2 ${classes.starImage}`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default JewelrySection;
