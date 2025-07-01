"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";
import classes from "./JewelryCategories.module.css";

const categories = [
  {
    title: "Diamond",
    image: "/assets/images/diamond.svg",
    textColor: "#59595B",
    fontStyle: "italic",
    link: "/diamond",
  },
  {
    title: "Gold",
    image: "/assets/images/bangle-straight.svg",
    textColor: "#BB7D1C",
    fontStyle: "italic",
    link: "/gold",
  },
  {
    title: "Silver",
    image: "/assets/images/silver.svg",
    textColor: "#59595B",
    fontStyle: "italic",
    link: "/silver",
  },
];

const JewelryCategories = () => {
  return (
    <Container className="py-5">
      <Row className="g-4 justify-content-center">
        {categories.map((item, index) => (
          <Col key={index} xs={12} md={4} className="d-flex">
            <Link href={item.link} className="text-decoration-none w-100">
              <Card className="text-center border h-100 w-100 hover-shadow">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div className={classes.categoryItem}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="img-fluid mb-3"
                    />
                    <div
                      className={`${classes.categoryTitle} ${item.fontStyle}`}
                      style={{ color: item.textColor }}
                    >
                      {item.title}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JewelryCategories;
