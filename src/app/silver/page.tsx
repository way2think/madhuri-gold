import { diamondProducts, goldProducts, silverProducts } from "@/components/data/products";
import JewelrySection from "@/components/JewelrySection/JewelrySection";
import React from "react";

const SliverPage = () => {
  return (
    <main>
      <JewelrySection
        subheading="Sliver"
        bannerImage="/assets/images/silver-model.jpg"
        bannerTextImage="/assets/images/Shine Bright with.svg"
        bannerSecondTextImage="/assets/images/sleek Silver Creations.svg"
        products={silverProducts}
      />
    </main>
  );
};

export default SliverPage;
