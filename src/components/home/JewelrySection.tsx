'use client';

import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import classes from './JewelrySection.module.css'; // Assuming you have a CSS module for styles

const JewelrySection = () => {
  return (
    <Container className="py-5 position-relative">
      <Row className="gy-4">
        {/* Left Column */}
        <Col xs={12} md={4}>
          <div
            className={`bg-white p-4 rounded shadow-sm h-100 border ${classes.firstColumn}`}
          >
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/images/mask1.png"
                alt="Gold 1"
                width={40}
                height={40}
                className="rounded-circle"
              />
              <Image
                src="/assets/images/mask2.png"
                alt="Gold 2"
                width={40}
                height={40}
                className="rounded-circle"
              />
            </div>
            <h5 className={` ${classes.textTitle}`}>
              Gold <span className={` ${classes.saving}`}>saving</span> Scheme
            </h5>
            <p className={`${classes.textContent} `}>
              Best Golden Eleven Flexi is created to help you buy jewellery that
              you always wanted to. Our Scheme offers you the option of buying
              gold jewellery, diamond jewellery, platinum jewellery, silver
              articles or silver jewellery. Enrol and buy your favourite
              jewellery in 11 months from the date of enrolment.
            </p>
            <Button
              variant="link"
              className={`text-decoration-none text-dark d-flex align-items-center gap-1 ${classes.buttonLink}`}
            >
              Know more <ArrowRight size={16} />
            </Button>
          </div>
        </Col>

        {/* Center Column */}
        <Col xs={12} md={4}>
          <div
            className={`position-relative bg-light rounded shadow-sm text-center d-flex flex-column align-items-center justify-end pt-4 h-100 ${classes.centerColumn}`}
          >
            <Button
              variant="link"
              className="position-absolute top-0 start-0 m-3 text-dark p-0"
            >
              <Image
                src="/assets/images/Play.svg"
                alt="Model"
                width={50}
                height={50}
              />
            </Button>
            <Image
              src="/assets/images/pexels-guru.svg"
              alt="Model"
              width={200}
              height={200}
              className="img-fluid"
            />
            <p className={`${classes.gold}`}>
              24K Gold <br />
              Plated
            </p>
          </div>
        </Col>

        {/* Right Column */}
        <Col xs={12} md={4}>
          <div
            className={`bg-white p-4 rounded shadow-sm h-100 text-left d-flex flex-column align-items-start justify-content-center ${classes.ThirdColumn}`}
          >
            <div className="d-flex ">
              <h6 className={`mb-3 ${classes.thirdTitle}`}>
                Handpicked <br />
                Designer Jewellery
              </h6>
              <a href="">
                {' '}
                <Image
                  src="/assets/images/arrow_outward.svg"
                  alt="Gold Ring"
                  width={50}
                  height={50}
                  objectFit="contain"
                  style={{ marginLeft: 10 }}
                />
              </a>
            </div>
            <div
              className="position-relative"
              style={{ width: 200, height: 200, margin: 'auto' }}
            >
              <Image
                src="/assets/images/bangle.svg"
                alt="Gold Ring"
                width={200}
                height={200}
                objectFit="contain"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JewelrySection;
