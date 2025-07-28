// components/TrendingSection.tsx
'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrendingCard from './TrendingCard';
import classes from './TrendingCard.module.css';

const trendingItems = [
  {
    title: 'Auspicious Occasion',
    image: '/assets/images/ear rings.svg',
  },
  {
    title: 'Gifted Jewellery',
    image: '/assets/images/box neckleace.svg',
  },
  {
    title: '18Kt Jewellery',
    image: '/assets/images/blackwomen.svg',
  },
];

const TrendingSection: React.FC = () => {
  return (
    <Container className="py-5">
      <div className="mb-4">
        <h3 className={classes.sectionTitle}>Trending Now</h3>
        <p className={classes.subTitle}>
          Jewellery pieces everyone’s eyeing right now
        </p>
      </div>

      <Row xs={1} sm={2} md={3} className="g-4">
        {trendingItems.map((item, idx) => (
          <Col key={idx}>
            <TrendingCard title={item.title} image={item.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingSection;
