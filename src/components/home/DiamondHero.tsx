"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import classes from "./DiamondHero.module.css";

const DiamondHero = () => {
  return (
    <section className={classes.heroSection}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col md={3} className={classes.leftBox}>
            <Image
              src="/assets/images/ringtheback.svg"
              alt="Bracelet"
              width={200}
              height={200}
            />
            <p className={classes.description}>
              Bridal diamond gold jewellery collection ranging from bracelet,
              necklace set, rings, locket set, earrings and many more
            </p>
            <div className={classes.findStoreText}>
              Find best <span className={classes.goldText}>Diamond</span>
              <br />
              For loved one’s
            </div>
            <Button className={classes.storeButton}>
              Find Store <span className={classes.arrow}>↗</span>
            </Button>
          </Col>

          {/* Center Column */}
          <Col md={6} className="text-center">
            <h2 className={classes.heroText}>
              Sparkle <span className={classes.goldText}>endlessly</span> with
              <br />
              <span className={classes.italic}>exclusive </span>
              <span className={classes.goldItalic}>
                <Image
                  src="/assets/images/diamond-ring-removebg-preview 1.svg"
                  alt="Jewellery Model"
                  width={50}
                  height={50}
                  className="img-fluid mt-3"
                />{" "}
                diamond
              </span>{" "}
              designs
            </h2>
            <Image
              src="/assets/images/girls gold.svg"
              alt="Jewellery Model"
              width={350}
              height={450}
              className="img-fluid mt-3"
            />
          </Col>

          {/* Right Column */}
          <Col md={3} className={classes.rightBox}>
            <h5 className="mb-3">Necklace Set</h5>
            <Image
              src="/assets/images/diamond necklac.svg"
              alt="Necklace Set"
              width={200}
              height={200}
              className="mb-2"
            />
            <p>
              <a href="#" className={classes.knowMoreLink}>
                Know more →
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DiamondHero;
