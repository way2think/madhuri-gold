"use client";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useRouter } from "next/navigation";
import classes from "./CollectionSection.module.css"; // Assuming you have a CSS module for styles
import { allProducts } from "@/data/products";
import { formatRupees } from "@/util";

// const items = [
//   {
//     name: "Snake Chain",
//     price: "₹5,000.00",
//     image: "/assets/images/silver-jain.svg",
//   },
//   {
//     name: "Ornaments",
//     price: "₹24,000.00",
//     image: "/assets/images/gold-ring.svg",
//   },
//   {
//     name: "The Prettiest",
//     price: "₹7,000.00",
//     image: "/assets/images/earings.svg",
//   },
//   {
//     name: "Gianna Ring",
//     price: "₹5,000.00",
//     image: "/assets/images/ringgold.svg",
//   },
//   {
//     name: "Silver Earring",
//     price: "₹25,000.00",
//     image: "/assets/images/silver.svg",
//   },
//   {
//     name: "Diamond Ring",
//     price: "₹24,000.00",
//     image: "/assets/images/diamond-ring-removebg-preview 1.svg",
//   },
//   {
//     name: "Gold Earrings",
//     price: "₹12,000.00",
//     image: "/assets/images/gold ring banner.svg",
//   },
//   {
//     name: "Necklace Set",
//     price: "₹25,000.00",
//     image: "/assets/images/diamond-necklaces.svg",
//   },
//   {
//     name: "Bangles",
//     price: "₹5,000.00",
//     image: "/assets/images/slivernecklac.svg",
//   },
//   {
//     name: "Necklace Set",
//     price: "₹15,000.00",
//     image: "/assets/images/necksliver.svg",
//   },
//   {
//     name: "Bridal Jewellery",
//     price: "₹2,60,000.00",
//     image: "/assets/images/bridal.svg",
//   },
//   {
//     name: "Gold Bangles",
//     price: "₹50,000.00",
//     image: "/assets/images/bangleset.svg",
//   },
// ];

export default function CollectionSection() {
  const navigate = useRouter();

  return (
    <Container className="py-5">
      <Row className="mb-4 text-center text-md-start align-items-center">
        <Col md={6}>
          <div className={`${classes.textContainer} row`}>
            <div className="col-md-6">
              {" "}
              <img
                src="/assets/images/diamond-ring-removebg-preview 1.svg"
                alt="Bride"
                className={classes.collectionringImage}
              />
              <h2 className={`${classes.serif} mb-2`}>Our Collections</h2>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-center">
              <img
                src="/assets/images/collection.svg"
                alt="Bride"
                className={classes.collectionImage}
              />
            </div>
          </div>
        </Col>

        <Col md={6} className="text-start mt-3 mt-md-0">
          <h2 className={classes.dare}>
            Dare to <span className={classes.dazzle}>dazzle</span>
          </h2>
          <div className={`${classes.textContainer} row`}>
            <div className="col-md-6">
              <h2 className={classes.differently}> differently </h2>
            </div>
            <div className="col-md-6 d-flex">
              <div className="d-flex justify-content-start justify-content-center ms-4 gap-2">
                <Image
                  src="/assets/images/mask1.svg"
                  width={40}
                  height={40}
                  alt=""
                />
                <Image
                  src="/assets/images/mask2.svg"
                  width={40}
                  height={40}
                  alt=""
                />
                <Image
                  src="/assets/images/mask3.svg"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
            </div>
          </div>

          <p className={classes.description}>
            Excellent Quality gold jewelry that are
            <br /> strongly recommended for you
          </p>
        </Col>
      </Row>

      <Row xs={2} md={4} className="g-4">
        {/* {items.map((item, index) => ( */}
        {allProducts.map((item, index) => (
          <Col
            key={index}
            onClick={() => {
              navigate.push(`/collections/${item.id}`);
            }}
          >
            <Card
              className="h-100 text-center border-0 shadow-sm"
              style={{ background: "#F1F1F1" }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                className={`${classes.collectionImage} `}
              />
              <Card.Body>
                <Card.Title className="fs-6">{item.title}</Card.Title>
                {/* <Card.Title className="fs-6">{item.name}</Card.Title> */}
                <Card.Text className="text-muted">
                  {formatRupees(item.price)}
                  {/* {item.price} */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
