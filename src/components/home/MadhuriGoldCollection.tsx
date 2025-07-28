'use client';

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './MadhuriGoldCollection.module.css';
import Link from 'next/link';

const MadhuriGoldCollection: React.FC = () => {
  return (
    <Container className={`${styles.collection} mt-5 mb-5`}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Madhuri Gold Collections</h2>
        <p className={styles.subTitle}>Explore our newly launched collection</p>
      </div>

      <Row className="gy-4">
        <Col xs={12} md={6}>
          <Link href="/">
            <div className={styles.card + ' ' + styles.leftCard}>
              <Image
                src="/assets/images/sprakling.svg"
                alt="Sparkling Necklace"
                fluid
                className={styles.image}
              />
              {/* <div className={styles.overlayBottomLeft}>
              <div className={styles.sparkling}>Sparkling <span className={styles.avenues}>Avenues</span></div>
            </div> */}
            </div>
          </Link>
        </Col>

        <Col xs={12} md={6}>
          <Row className="gy-4">
            <Col xs={12}>
              <Link href="/">
                <div className={styles.card}>
                  <Image
                    src="/assets/images/ear.svg"
                    alt="Stunning Earrings"
                    fluid
                    className={styles.image}
                  />
                  {/* <div className={styles.overlayTopRight}>
                  <span className={styles.stunning}>Stunning every <span className={styles.ear}>Ear</span></span>
                </div> */}
                </div>
              </Link>
            </Col>
            <Col xs={12}>
              <Link href="/">
                <div className={styles.card}>
                  <Image
                    src="/assets/images/daily ware.svg"
                    alt="Daily Ware Chains"
                    fluid
                    className={styles.image}
                  />
                  {/* <div className={styles.overlayBottomRight}>
                  <span className={styles.daily}>Daily ware <span className={styles.chains}>Chains</span></span>
                </div> */}
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MadhuriGoldCollection;
