
"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import classes from "./CategoryCard.module.css"

interface Category {
  title: string;
  image: string;
}

const categories: Category[] = [
  { title: "Bangles", image: "/assets/images/hand bangles.svg" },
  { title: "Rings", image: "/assets/images/fingers ring.svg" },
  { title: "Necklaces", image: "/assets/images/neckleas gold.svg" },
  { title: "Earrings", image: "/assets/images/earings gold.svg" },
  { title: "Bracelets", image: "/assets/images/barcelets.svg" },
  { title: "Jewelry Set", image: "/assets/images/jewelry set.svg" },
];

const CategoryGrid: React.FC = () => {
  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className={classes.sectionTitle}>Find Your Perfect Match</h2>
          <p className={classes.subTitle}>Shop by Categories</p>
        </div>
        <Button variant="light" className="">
          <span className="me-2">View Collections</span> →
        </Button>
      </div>

      <Row xs={1} sm={2} md={3} className="g-4">
        {categories.map((cat, idx) => (
          <Col key={idx}>
            <CategoryCard title={cat.title} image={cat.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryGrid;
