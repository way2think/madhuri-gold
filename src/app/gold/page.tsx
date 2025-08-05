import { goldProducts } from '@/data/products';
import JewelrySection from '@/components/JewelrySection/JewelrySection';
import JewelryColumn from '@/Reusable/JewelryColumn';
import React from 'react';

const GoldPage = () => {
  return (
    <main>
      <JewelrySection
        bannerImage="/assets/images/model-closeup/model-closeup-with-bg.jpeg"
        // bannerImage="/assets/images/trisha.svg"
        bannerTextImage="/assets/images/glamours.svg"
      />
      <JewelryColumn products={goldProducts} subheading="Gold" />
    </main>
  );
};

export default GoldPage;
