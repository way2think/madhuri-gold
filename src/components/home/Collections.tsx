'use client';

import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import classes from './Collections.module.css'; // Assuming you have a CSS module for styles
import { allProducts } from '@/data/products';
import { formatRupees } from '@/util';
import { useRouter } from 'next/navigation';

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

export default function Collections() {
  const navigate = useRouter();

  return (
    <Container className="py-5">
      <Row className="mb-4 text-center text-md-start align-items-center">
        <Col md={6}>
          <div className={`${classes.textContainer} row`}>
            <div className="col-md-6">
              {' '}
              <h2 className={`${classes.serif} mb-2`}>
                Our
                <br /> <span className="fst-italic">Collections</span>
              </h2>
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
            <div className={`${classes.smallImage} col-md-6 d-flex`}>
              <div className="d-flex justify-content-start justify-content-center ms-4 gap-2">
                <Image
                  src="/assets/images/mask1.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <Image
                  src="/assets/images/mask2.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <Image
                  src="/assets/images/mask3.png"
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

      <Row xs={2} md={4} className="">
        {allProducts.map((item, index) => (
          <Col
            key={index}
            onClick={() => {
              navigate.push(`/collections/${item.id}`);
            }}
          >
            <div className="h-100 row d-flex text-center border cursor-pointer">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                {' '}
                <Card.Img
                  variant="left"
                  src={item.image}
                  className={`${classes.imagecollection} `}
                />
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <Card.Body>
                  <Card.Title className="fs-6">{item.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {formatRupees(item.price)}
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
