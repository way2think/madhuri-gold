// components/JewelrySection.tsx
"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import classes from "./JewelrySection.module.css";
import Link from "next/link";

interface Product {
  title: string;
  price: string;
  image: string;
  link: string;
}

interface JewelrySectionProps {
  subheading: string;
  bannerImage: string;
  products: Product[];
  bannerTextImage: string;
  bannerSecondTextImage?: string;
}

const JewelrySection: React.FC<JewelrySectionProps> = ({
  subheading,
  bannerImage,
  products,
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

      <Row className="g-4">
        <h4 className={classes.subheading}>{subheading}</h4>
        {products.map((item, idx) => (
          <Col key={idx} xs={6} md={3}>
            <Link href={item.link} className="text-decoration-none w-100">
              <Card
                className="border-0 shadow-sm h-100 text-center"
                style={{ background: "#F1F1F1" }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className={`${classes.collectionImage} `}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JewelrySection;
