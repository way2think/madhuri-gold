
"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import classes from "./CategoryCard.module.css"
import Link from "next/link";

interface Category {
  id: string;
  title: string;
  image: string;
}

const categories: Category[] = [
  { id:"bangles", title: "Bangles", image: "/assets/images/hand bangles.svg" },
  { id:"rings", title: "Rings", image: "/assets/images/fingers ring.svg" },
  { id:"necklaces", title: "Necklaces", image: "/assets/images/neckleas gold.svg" },
  { id:"earrings", title: "Earrings", image: "/assets/images/earings gold.svg" },
  { id:"bracelets", title: "Bracelets", image: "/assets/images/barcelets.svg" },
  { id:"jewelry-set", title: "Jewelry Set", image: "/assets/images/jewelry set.svg" },
];

const CategoryGrid: React.FC = () => {
  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className={classes.sectionTitle}>Find Your Perfect Match</h2>
          <p className={classes.subTitle}>Shop by Categories</p>
        </div>
        {/* <Button variant="light" className="">
          <span className="me-2">View Collections</span> →
        </Button> */}
        <Link href="/collections" className="text-decoration-none">
          {/* <span className="fw-bold px-3 py-2 border rounded bg-light text-dark d-inline-flex align-items-center"> */}
            <span className="me-2">View All</span> →
          {/* </span> */}
        </Link>
      </div>

      <Row xs={1} sm={2} md={3} className="g-4">
        {categories.map((cat, idx) => (
          <Col key={idx}>
            <CategoryCard id={cat.id} title={cat.title} image={cat.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryGrid;
