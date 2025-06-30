"use client";

import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRight, PlayCircle } from "lucide-react";
import classes from "./JewelrySection.module.css"; // Assuming you have a CSS module for styles

const JewelrySection = () => {
  return (
    <Container className="py-5">
      <Row className="gy-4">
        {/* Left Column */}
        <Col xs={12} md={4}>
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Image
                src="/assets/images/mask1.svg"
                alt="Gold 1"
                width={40}
                height={40}
                className="rounded-circle"
              />
              <Image
                src="/assets/images/mask2.svg"
                alt="Gold 2"
                width={40}
                height={40}
                className="rounded-circle"
              />
            </div>
            <h5 className="text-dark fw-semibold">
              Gold <span className="fst-italic text-warning">saving</span>{" "}
              Scheme
            </h5>
            <p className={`${classes.textContent} text-muted mt-2 small`}>
              Best Golden Eleven Flexi is created to help you buy jewellery that
              you always wanted to. Our Scheme offers you the option of buying
              gold jewellery, diamond jewellery, platinum jewellery, silver
              articles or silver jewellery. Enrol and buy your favourite
              jewellery in 11 months from the date of enrolment.
            </p>
            <Button
              variant="link"
              className="p-0 text-decoration-none text-dark d-flex align-items-center gap-1"
            >
              Know more <ArrowRight size={16} />
            </Button>
          </div>
        </Col>

        {/* Center Column */}
        <Col xs={12} md={4}>
          <div className="position-relative bg-light rounded shadow-sm text-center d-flex flex-column align-items-center justify-end py-4 h-100">
            <Button
              variant="link"
              className="position-absolute top-0 start-0 m-3 text-dark p-0"
            >
              <PlayCircle size={36} />
            </Button>
            <Image
              src="/model.png"
              alt="Model"
              width={200}
              height={300}
              className="img-fluid"
            />
            <p className="small mt-3 text-muted">24K Gold Plated</p>
          </div>
        </Col>

        {/* Right Column */}
        <Col xs={12} md={4}>
          <div className="bg-white p-4 rounded shadow-sm h-100 text-center d-flex flex-column align-items-center justify-center">
            <h6 className="fw-semibold text-dark mb-3">
              Handpicked <br />
              Designer Jewellery
            </h6>
            <div
              className="position-relative"
              style={{ width: 96, height: 96 }}
            >
              <Image
                src="/gold-ring.png"
                alt="Gold Ring"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Button
              variant="link"
              className="p-0 mt-3 text-decoration-none text-dark d-flex align-items-center gap-1"
            >
              Explore <ArrowRight size={16} />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JewelrySection;
