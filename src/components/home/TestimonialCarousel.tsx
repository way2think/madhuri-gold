'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container } from 'react-bootstrap';
import classes from './TestimonialCarousel.module.css';
import Image from 'next/image';

interface Testimonial {
  name: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ms. Sindhu Kandru',
    message:
      'We are proud to be a part of all her milestone events both big and small since her childhood. "All my jewellery I buy from vaibhav jewelers only, all are unique pieces. I never found similar jewelers outside"',
    image: '/assets/images/sindhu.svg',
  },
  {
    name: 'Ms. Sridevi Adibatla',
    message:
      'We are proud to be a part of all her milestone events both big and small since her childhood. "All my jewellery I buy from vaibhav jewelers only, all are unique pieces. I never found similar jewelers outside"',
    image: '/assets/images/sridevi.svg',
  },
  {
    name: 'Ms. Sindhu Kandru',
    message:
      'We are proud to be a part of all her milestone events both big and small since her childhood. "All my jewellery I buy from vaibhav jewelers only, all are unique pieces. I never found similar jewelers outside"',
    image: '/assets/images/sindhu.svg',
  },
  {
    name: 'Ms. Sridevi Adibatla',
    message:
      'We are proud to be a part of all her milestone events both big and small since her childhood. "All my jewellery I buy from vaibhav jewelers only, all are unique pieces. I never found similar jewelers outside"',
    image: '/assets/images/sridevi.svg',
  },
];

const TestimonialCarousel: React.FC = () => {
  return (
    <div className={classes.testimonialSection}>
      <Container>
        <h2 className={classes.sectionTitle}>Customers say about us</h2>
        <p className={classes.subTitle}>
          Proud to be a part of their celebration and joy
        </p>

        {/* 👇 Make sure pagination div is BEFORE the Swiper */}

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} ${classes.customBullet}"></span>`,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className={classes.swiperWrapper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={`${classes.card} row`}>
                <div className="col-md-8" style={{ textAlign: 'left' }}>
                  <p className={classes.message}>{testimonial.message}</p>
                  <i className={classes.name}>- {testimonial.name}</i>
                </div>
                <div className="col-md-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={classes.image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`custom-pagination ${classes.customPagination}`} />

        <div className="d-flex justify-content-end mt-3 gap-3">
          <div className={`custom-prev ${classes.navBtn}`}>
            <Image
              src="/assets/images/arrow_left.svg"
              alt="Previous"
              width={30}
              height={30}
            />
          </div>
          <div className={`custom-next ${classes.navBtn}`}>
            <Image
              src="/assets/images/arrow_right.svg"
              alt="Next"
              width={30}
              height={30}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialCarousel;
