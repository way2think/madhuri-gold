'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './ProductDetail.module.css';
import JewelryColumn from '@/Reusable/JewelryColumn';
import { Product } from '@/types';
import { formatRupees } from '@/util';

export interface ProductDetailProps {
  image: string;
  title: string;
  price: number;
  breadcrumb: string[];
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  recommendedProducts: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  image,
  title,
  price,
  breadcrumb,
  description,
  specifications,
  recommendedProducts,
}) => {
  return (
    <section className={classes.productDetail}>
      <Container>
        <nav className={classes.breadcrumb} aria-label="breadcrumb">
          <ol>
            {breadcrumb.map((crumb, idx) => {
              const isLast = idx === breadcrumb.length - 1;
              // Home should link to "/"
              const path =
                idx === 0
                  ? '/'
                  : '/' +
                    breadcrumb
                      .slice(1, idx + 1)
                      .map((c) => c.toLowerCase().replace(/\s+/g, '-'))
                      .join('/');
              return (
                <li key={idx} style={{ display: 'inline' }}>
                  {!isLast ? (
                    <>
                      <a href={path}>{crumb}</a>
                      {' / '}
                    </>
                  ) : (
                    <span>{crumb}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img src={image} alt={title} className={classes.productImage} />
          </Col>
          <Col md={6}>
            <h2 className={classes.title}>{title}</h2>
            <h4 className={classes.price}>{formatRupees(price)}</h4>
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
      <JewelryColumn products={recommendedProducts} />
    </section>
  );
};

export default ProductDetail;
