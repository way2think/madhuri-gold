'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import Image from "next/image";
import styles from './GoldSavingScheme.module.css';

const GoldSavingScheme: React.FC = () => {
  return (
    <div className={styles.bannerWrapper}>
      <Container className={styles.GoldSavingScheme}>
        <Row className="align-items-center g-0">
          <Col xs={12} md={5} className={styles.imageCol}></Col>
          <Col xs={12} md={7} className="p-4">
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>
                Gold <span className={styles.highlight}>saving</span> Scheme
              </h2>
              <p className={styles.description}>
                Best Golden Eleven Flexi is created to help you buy jewellery
                that you always wanted to. Our Scheme offers you the option of
                buying gold jewellery, diamond jewellery, platinum jewellery,
                silver articles or silver jewellery. Enrol and buy your
                favourite jewellery in 11 months from the date of enrolment.
              </p>
              <Button className={styles.button}>Know more →</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GoldSavingScheme;
