import { diamondProducts } from "@/components/data/products";
import JewelrySection from "@/components/JewelrySection/JewelrySection";
import React from "react";

const Diamondpage = () => {
  return (
    <main>
      <JewelrySection
        subheading="Diamonds"
        bannerImage="/assets/images/girls gold.svg"
        bannerTextImage="/assets/images/spark.svg"
        products={diamondProducts}
        
      />
    </main>
  );
};

export default Diamondpage;
