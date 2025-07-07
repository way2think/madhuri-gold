// components/JewelrySection.tsx
"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import classes from "./JewelryColumn.module.css";
import Link from "next/link";
import { Product } from "@/types";
import { formatRupees } from "@/util";

interface JewelrySectionProps {
  subheading?: string;
  products: Product[];
}

const JewelryColumn: React.FC<JewelrySectionProps> = ({
  products,
  subheading,
}) => {
  return (
    <Container fluid className="py-5 px-3 px-md-5">
      <Row className="g-4">
        <h4 className={classes.subheading}>{subheading}</h4>
        {products.map((item, idx) => (
          <Col key={idx} xs={6} md={3}>
            <Link
              href={
                item.id.startsWith("collections/")
                  ? `/${item.id}`
                  : `/collections/${item.id}`
              }
              className="text-decoration-none w-100"
            >
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
                  <Card.Text className="text-muted">
                    {formatRupees(item.price)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JewelryColumn;
