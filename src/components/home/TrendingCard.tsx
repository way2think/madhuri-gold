// components/TrendingCard.tsx
"use client";
import React from "react";
import { Card } from "react-bootstrap";
import classes from "./TrendingCard.module.css";

interface TrendingCardProps {
  title: string;
  image: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ title, image }) => {
  return (
    <Card className="border-0 text-center">
      <Card.Img
        variant="top"
        src={image}
        style={{ borderRadius: "12px", objectFit: "cover", height: "350px" }}
      />
      <Card.Body className="px-0 d-flex justify-content-start align-items-start">
        <Card.Title className={`${classes.title} fw-normal text-left fs-5`}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TrendingCard;
