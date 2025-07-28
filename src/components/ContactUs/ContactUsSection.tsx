'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import classes from './ContactUsSection.module.css'; // Adjust the path as necessary

const ContactUsSection = () => {
  return (
    <section className={`bg-white ${classes.contactSection}`}>
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col xs={12} lg={7} className="mb-4 mb-lg-0">
            <h5
              className={`${classes.contactheading} text-dark fw-medium mb-2`}
            >
              Contact Us
            </h5>
            <h2 className={`mb-3 ${classes.SectionHeading}`}>
              Reach Out, We’re here to
              <br />
              <span className={`${classes.highlightText} d-block`}>
                Craft <span className="text-warning">Your</span> Story
              </span>
            </h2>

            <Row className="gy-4">
              {/* Mobile Section */}
              <Col xs={12} sm={6} md={4}>
                <h6 className={`fw-bold mb-2 ${classes.mobile}`}>Mobile</h6>
                <p className={classes.number}>
                  <Phone size={16} className="me-2" />
                  +91 9951338666
                </p>
                <p className={classes.number}>
                  <Phone size={16} className="me-2" />
                  +91 9985536292
                </p>
              </Col>

              {/* Address Section */}
              <Col xs={12} sm={6} md={4}>
                <h6 className={`fw-bold mb-2 ${classes.mobile}`}>Address</h6>
                <p className={classes.number}>
                  <MapPin size={16} className="me-2" />
                  3/671, Bazaar St, Opp. Beri Kalyana Mandapam, Bahadur Pet,
                  <br />
                  Srikalahasti, Andhra Pradesh 517644
                </p>
              </Col>

              {/* Email Section */}
              <Col xs={12} md={4}>
                <h6 className={`fw-bold mb-2 ${classes.mobile}`}>Email</h6>
                <p className={classes.number}>
                  <Mail size={16} className="me-2" />
                  madhuri@gmail.com
                </p>
                <p className={classes.number}>
                  <Mail size={16} className="me-2" />
                  gold@gmail.com
                </p>
              </Col>
            </Row>
          </Col>

          {/* Image Section */}
          <Col xs={12} lg={5} className="text-center">
            <Image
              src="/assets/images/trisha.svg" // Update path if different
              alt="Bridal Jewelry"
              width={360}
              height={480}
              className="img-fluid rounded"
              style={{ maxHeight: '480px', objectFit: 'contain' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsSection;
