import Banner from "@/components/home/Banner";
import JewelrySection from "@/components/home/JewelrySection";
import JewelryCategories from "@/components/home/JewelryCategories";
import FeaturedJewellery from "@/components/home/FeaturedJewellery";
import DiamondHero from "@/components/home/DiamondHero";
import Collections from "@/components/home/Collections";
import GoldBanner from "@/components/home/GoldBanner";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <JewelrySection />
        <JewelryCategories />
        <FeaturedJewellery />
        <DiamondHero />
        <Collections />
        <GoldBanner />
      </div>
    </>
  );
}
