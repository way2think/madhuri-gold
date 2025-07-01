import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/home/Banner";
import JewelrySection from "@/components/home/JewelrySection";
import JewelryCategories from "@/components/home/JewelryCategories";
import FeaturedJewellery from "@/components/home/FeaturedJewellery";
import DiamondHero from "@/components/home/DiamondHero";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <JewelrySection/>
        <JewelryCategories/>
        <FeaturedJewellery/>
        <DiamondHero/>
      </div>
    </>
  );
}
