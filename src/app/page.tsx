import Banner from "@/components/home/Banner";
import JewelrySection from "@/components/home/JewelrySection";
import JewelryCategories from "@/components/home/JewelryCategories";
import FeaturedJewellery from "@/components/home/FeaturedJewellery";
import DiamondHero from "@/components/home/DiamondHero";
import Collections from "@/components/home/Collections";
import GoldBanner from "@/components/home/GoldBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import TrendingSection from "@/components/home/TrendingSection";
import MadhuriGoldCollection from "@/components/home/MadhuriGoldCollection";
import DiamondCarouselBanner from "@/components/home/DiamondCarouselBanner";

export default function Home() {
  return (
    <>
      <div>
        {/* <Banner /> */}
        {/* <JewelrySection /> */}
        {/* <JewelryCategories /> */}
        <DiamondCarouselBanner/>
        <MadhuriGoldCollection/>
        <CategoryGrid />
        <FeaturedJewellery />
        <TrendingSection />
        {/* <DiamondHero /> */}
        <GoldBanner />
        <Collections />
      </div>
    </>
  );
}
