"use client";

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import classes from "./ProductDetail.module.css";
import JewelryColumn from "@/Reusable/JewelryColumn";
import { goldProducts } from "../data/products";

export interface ProductDetailProps {
  image: string;
  title: string;
  price: string;
  breadcrumb: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  image,
  title,
  price,
  breadcrumb,
  description,
  specifications,
}) => {
  return (
    <section className={classes.productDetail}>
    
      <Container>
        <p className={classes.breadcrumb}>{breadcrumb}</p>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img src={image} alt={title} className={classes.productImage} />
          </Col>
          <Col md={6}>
            
            <h2 className={classes.title}>{title}</h2>
            <h4 className={classes.price}>{price}</h4>
            <p className={classes.description}>{description}</p>

            <h3 className={classes.spec}>SPECIFICATIONS</h3>
            <div className={classes.specList}>
              {specifications.map((spec, index) => (
                <p key={index} className={classes.specItem}>
                  <strong>{spec.label}</strong>
                  <span>: {spec.value}</span>
                </p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <JewelryColumn products={goldProducts} />
    </section>
  );
};

export default ProductDetail;
