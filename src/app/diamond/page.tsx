import { diamondProducts } from "@/data/products";
import JewelrySection from "@/components/JewelrySection/JewelrySection";
import JewelryColumn from "@/Reusable/JewelryColumn";
import React from "react";

const Diamondpage = () => {
  return (
    <main>
      <JewelrySection
        bannerImage="/assets/images/girls gold.svg"
        bannerTextImage="/assets/images/spark.svg"
      />
      <JewelryColumn products={diamondProducts} subheading="Diamonds" />
    </main>
  );
};

export default Diamondpage;
