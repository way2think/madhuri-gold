import ProductDetail from "@/components/ProductDetails/ProductDetail";
import React from "react";

const DiamondRingpage = () => {
  return (
    <ProductDetail
      image="/assets/images/diamond-ring-removebg-preview 1.svg"
      title="Diamond Ring"
      price="₹5,000.00"
      breadcrumb="Home / Gold / Bracelets"
      description="1 Piece Ring Ring Size Options: 6 / 7 / 8 / 9 Cross Dangle Blue Purple Green Crystal Rings Set Elegance redefined with Madhuri Diamonds’ lab-created brilliance. This exquisite diamond necklace is more than just jewelry; it’s a statement of modern luxury and ethical beauty. Shine bright with a touch of sophistication.."
      specifications={[
        { label: "22K Gold", value: "10.5 Gram" },
        { label: "Design Code", value: "GB-2211" },
        { label: "Product Weight", value: "10.5 Gram" },
      ]}
    />
  );
};

export default DiamondRingpage;
