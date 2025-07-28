// components/FeaturedJewellery.tsx
"use client";

import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import classes from "./FeaturedJewellery.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { featuredProducts } from "@/data/products";
import { useRouter } from "next/navigation";
import Link from "next/link";

// const jewelleryItems = [
//   {
//     title: "Diamond Ring",
//     image: "/assets/images/diamond-ring-removebg.svg",
//   },
//   {
//     title: "The Gianna Ring",
//     image: "/assets/images/diamond-ring.svg",
//   },
//   {
//     title: "Gajalya Earrings",
//     image: "/assets/images/Carosuelimage.svg",
//   },
//   {
//     title: "Gold toned bangles",
//     image: "/assets/images/bangle.svg",
//   },
//   {
//     title: "Diamond Ring",
//     image: "/assets/images/diamond-ring-removebg.svg",
//   },
//   {
//     title: "The Gianna Ring",
//     image: "/assets/images/diamond-ring.svg",
//   },
//   {
//     title: "Gajalya Earrings",
//     image: "/assets/images/Carosuelimage.svg",
//   },
//   {
//     title: "Gold toned bangles",
//     image: "/assets/images/bangle.svg",
//   },
// ];

const FeaturedJewellery = () => {
  const navigate = useRouter();

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className={classes.sectionTitle}>Latest collections</h2>
        {/* <Button variant="link" className={classes.viewButton} onClick={() => navigate.push("/collections?sort=latest")}>
          View Collections <ArrowRight size={16} />
        </Button> */}
         <Link href="/collections?sort=latest" className="text-decoration-none">
          {/* <span className="fw-bold px-3 py-2 border rounded bg-light text-dark d-inline-flex align-items-center"> */}
            <span className="me-2">View All</span> →
          {/* </span> */}
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="${className} ${classes.customBullet}"></span>`,
        }}
      >
        {featuredProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={classes.card}
              onClick={() => {
                navigate.push(`/collections/${item.id}`);
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={180}
                height={180}
              />
              <p className={classes.cardTitle}>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex flex-column align-items-center mt-4">
        <div
          className="custom-pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        />
        <div className="d-flex gap-3  mt-2" style={{ marginLeft: "auto" }}>
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
              alt="next"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedJewellery;
