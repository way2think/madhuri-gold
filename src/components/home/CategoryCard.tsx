// components/CategoryCard.tsx

"use client";
import React from "react";
import { Card } from "react-bootstrap";
import classes from "./CategoryCard.module.css";

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <Card className="border-0 text-center">
      <Card.Img
        variant="top"
        src={image}
        style={{ borderRadius: "12px", objectFit: "cover", height: "300px" }}
      />
      <Card.Body className="d-flex justify-content-start align-items-start">
        <Card.Title className={`${classes.title} fw-normal text-left fs-5`}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
