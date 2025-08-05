// components/GoldBanner.tsx
'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
// import Image from "next/image";
import classes from './GoldBanner.module.css';
import { useRouter } from 'next/navigation';

const GoldBanner = () => {
  const navigate = useRouter();

  return (
    <div className={classes.heroSection}>
      <Container>
        <Row className="align-items-center position-relative">
          {/* Left Column */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <p className={classes.madhuriTitle}>Madhuri gold</p>
            <p className={classes.madhuriSub}>Most Loved Jewellery</p>
            <img
              src="/assets/images/blackgold.svg"
              alt="Madhuri Gold"
              className="img-fluid"
            />
            <p className={classes.exquisiteText}>
              Exquisite{' '}
              <span className={classes.goldItalic}>Gold Jewellery</span>
              <br />
              For extraordinary you
            </p>
          </Col>

          {/* Middle Column */}
          <Col md={4} className="text-center">
            <h2 className={classes.mainHeading}>
              <img
                src="/assets/images/glamours.svg"
                alt="Ring Icon"
                className="img-fluid"
              />
            </h2>
            <img
              src="/assets/images/model-closeup/model-closeup-with-bg.jpeg"
              // src="/assets/images/actoressgirl.svg"
              alt="Bride"
              className={`${classes.actoressgirl}  img-fluid rounded`}
            />
            <h3 className={classes.sparkle}>
              <span className={classes.Infinite}>Infinite</span> Sparkle
            </h3>
            <Button
              className={classes.findStoreBtn}
              onClick={() => navigate.push('/collections?metal=gold')}
            >
              Find Store <span className={classes.arrowIcon}>↗</span>
            </Button>
            <img
              src={'/assets/images/arrow_outward.svg'}
              alt="Arrow"
              className={classes.arrow}
            />
          </Col>

          {/* Right Column */}
          <Col md={4} className="text-center text-md-start mt-4 mt-md-0">
            <p className={classes.bridalTitle}>Bridal Jewellery</p>
            <img
              src="/assets/images/necklace sliver.svg"
              alt="Bridal"
              className={`${classes.bridalImage} img-fluid`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GoldBanner;
