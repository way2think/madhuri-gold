"use client";

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import classes from "./CollectionSection.module.css";
import { allProducts } from "@/data/products";
import { formatRupees } from "@/util";
import FilterSort from "./FilterSort";
import FilterModal from "./FilterModal";

interface FilterOptions {
  metal: string[];
  productType: string[];
  gender: string[];
  occasion: string[];
}

export default function CollectionSection() {
  const navigate = useRouter();
  const searchParams = useSearchParams();

  const [sortOption, setSortOption] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    metal: [],
    productType: [],
    gender: [],
    occasion: [],
  });

  // Initialize filters and sort option from URL search params on client-side mount
  useEffect(() => {
    const newFilters: FilterOptions = {
      metal: [],
      productType: [],
      gender: [],
      occasion: [],
    };
    let newSortOption = "";

    searchParams.forEach((value, key) => {
      if (key in newFilters) {
        newFilters[key as keyof FilterOptions] = value.split(",");
      } else if (key === "sort") {
        newSortOption = value;
      } else if (key === "productType") {
        newFilters.productType = value.split(",");
      }
    });
    setFilters(newFilters);
    setSortOption(newSortOption);
  }, [searchParams]); // Re-run when searchParams change

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    if (filters.metal.length > 0) {
      products = products.filter((p) => filters.metal.includes(p.metal));
    }
    if (filters.productType.length > 0) {
      products = products.filter((p) =>
        filters.productType.includes(p.productType)
      );
    }
    if (filters.gender.length > 0) {
      products = products.filter((p) => filters.gender.includes(p.gender));
    }
    if (filters.occasion.length > 0) {
      products = products.filter((p) => filters.occasion.includes(p.occasion));
    }

    if (sortOption === "price-asc") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      products.sort((a, b) => b.price - a.price);
    } else if (sortOption === "latest") {
      products.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    return products;
  }, [filters, sortOption]);

  const clearFilters = () => {
    setFilters({
      metal: [],
      productType: [],
      gender: [],
      occasion: [],
    });
    setSortOption(""); // Clear sort option as well
    setShowFilterModal(false);
    navigate.push("/collections"); // Clear URL params
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.metal.length > 0) count++;
    if (filters.productType.length > 0) count++;
    if (filters.gender.length > 0) count++;
    if (filters.occasion.length > 0) count++;
    return count;
  }, [filters]);

  return (
    <Container className="py-5">
      <Row className="mb-4 text-center text-md-start align-items-center">
        <Col md={6}>
          <div className={`${classes.textContainer} row`}>
            <div className="col-md-6">
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
      <Row className="mb-4 align-items-center justify-content-between">
        <Col md={6}>
          <p className="mb-0">Showing {filteredProducts.length} of {allProducts.length} designs</p>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <FilterSort
            sortOption={sortOption}
            setSortOption={setSortOption}
            setShowFilterModal={setShowFilterModal}
            activeFilterCount={activeFilterCount}
          />
        </Col>
      </Row>
      {filteredProducts.length > 0 ? (
        <Row xs={2} md={4} className="g-4">
          {filteredProducts.map((item, index) => (
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
                  <Card.Text className="text-muted">
                    {formatRupees(item.price)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col className="text-center py-5">
            <h3>No products found matching your criteria.</h3>
            <p>Please adjust your filters or clear them to see more designs.</p>
          </Col>
        </Row>
      )}
      <FilterModal
        show={showFilterModal}
        onHide={() => setShowFilterModal(false)}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />
    </Container>
  );
}