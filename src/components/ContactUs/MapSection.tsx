// components/MapSection.tsx
'use client';

import { Container } from 'react-bootstrap';
import classes from './MapSection.module.css'; // Adjust the path as necessary

const MapSection = () => {
  return (
    <section className="py-5" style={{ background: '#fff' }}>
      <Container>
        <h3 className={`${classes.findUs} mb-4 fw-bold`}>Find Us</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4702453554687!2d79.7012333!3d13.750491799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d3e5151453f17%3A0xe807f025eff5e5fc!2sMadhuri%20Silver%20Palace!5e0!3m2!1sen!2sin!4v1751555501572!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default MapSection;
