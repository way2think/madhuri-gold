'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import classes from './EarringCarousel.module.css';

interface CarouselItem {
  title: string;
  subtitle: string;
  image: string;
}

const carouselItems: CarouselItem[] = [
  {
    title: 'Gajalya Gold Earrings',
    subtitle: 'Premium Grade',
    image: '/assets/images/Carosuelimage.svg',
  },
  {
    title: 'Maya Silver Jhumkas',
    subtitle: 'Premium Grade',
    image: '/assets/images/Carosuelimage.svg',
  },
  {
    title: 'Zinnia Pearl Studs',
    subtitle: 'Premium Grade',
    image: '/assets/images/Carosuelimage.svg',
  },
];

export default function EarringCarousel() {
  return (
    <div className="w-full max-w-md mx-auto py-10 text-center">
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="${className} ${classes.customBullet}"></span>`,
        }}
        loop
        spaceBetween={30}
        className="mySwiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            {/* Ensure enough height so bullets aren't hidden */}
            <div className="min-h-[440px] flex flex-col justify-between pb-6">
              <div>
                <p className={`text-sm text-gray-600 ${classes.carosuelHead1}`}>
                  {item.subtitle}
                </p>
                <h2
                  className={`text-xl font-semibold mb-4 ${classes.carosuelHead2}`}
                >
                  {item.title}
                </h2>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className={`mx-auto w-48 ${classes.carosuelImage}`}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination container */}
        <div className="swiper-pagination mt-4 flex justify-center" />
      </Swiper>
    </div>
  );
}
