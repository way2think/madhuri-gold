import { diamondProducts, goldProducts, silverProducts } from "@/data/products";
import JewelrySection from "@/components/JewelrySection/JewelrySection";
import JewelryColumn from "@/Reusable/JewelryColumn";
import React from "react";

const SliverPage = () => {
  return (
    <main>
      <JewelrySection
        bannerImage="/assets/images/silver-model.jpg"
        bannerTextImage="/assets/images/Shine Bright with.svg"
        bannerSecondTextImage="/assets/images/sleek Silver Creations.svg"
      />
      <JewelryColumn products={silverProducts} subheading="Silver" />
    </main>
  );
};

export default SliverPage;
