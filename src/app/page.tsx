import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/home/Banner";
import JewelrySection from "@/components/home/JewelrySection";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <JewelrySection/>
      </div>
    </>
  );
}
