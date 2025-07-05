import { diamondProducts, goldProducts } from "@/components/data/products";
import JewelrySection from "@/components/JewelrySection/JewelrySection";
import React from "react";

const GoldPage = () => {
  return (
    <main>
      <JewelrySection
        subheading="Gold"
        bannerImage="/assets/images/trisha.svg"
        bannerTextImage="/assets/images/glamours.svg"
        products={goldProducts}
      />
    </main>
  );
};

export default GoldPage;
