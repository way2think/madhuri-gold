import { Product } from "@/types";

const diamondProducts: Product[] = [
  {
    id: "gold-earrings",
    title: "Gold Earrings",
    price: 5000,
    image: "/assets/images/diamond-necklaces.svg",
    link: "/diamond",
    category: "diamond",
    breadcrumb: ["Home", "Diamond", "Gold Earrings"],
    description:
      "Elegant gold earrings with diamond accents, perfect for special occasions.",
    specifications: [
      { label: "Material", value: "Gold, Diamond" },
      { label: "Weight", value: "10g" },
      { label: "Purity", value: "18K" },
      { label: "Style", value: "Stud" },
    ],
    recommendedProducts: [],
  },
  {
    id: "ornaments",
    title: "Ornaments",
    price: 5000,
    image: "/assets/images/gold-ring.svg",
    link: "/diamond",
    category: "diamond",
    breadcrumb: ["Home", "Diamond", "Ornaments"],
    description: "Beautiful diamond-studded ornaments to enhance your beauty.",
    specifications: [
      { label: "Material", value: "Gold, Diamond" },
      { label: "Weight", value: "15g" },
      { label: "Purity", value: "18K" },
      { label: "Style", value: "Traditional" },
    ],
    recommendedProducts: [],
  },
  {
    id: "diamond-ring",
    title: "Diamond Ring",
    price: 5000,
    image: "/assets/images/diamond-ring-removebg-preview 1.svg",
    link: "/diamond",
    category: "diamond",
    breadcrumb: ["Home", "Diamond", "Diamond Ring"],
    description: "Classic diamond ring with a sparkling solitaire centerpiece.",
    specifications: [
      { label: "Material", value: "Gold, Diamond" },
      { label: "Weight", value: "5g" },
      { label: "Purity", value: "18K" },
      { label: "Style", value: "Solitaire" },
    ],
    recommendedProducts: [],
  },
  {
    id: "the-prettiest",
    title: "The Prettiest",
    price: 5000,
    image: "/assets/images/earings.svg",
    link: "/diamond",
    category: "diamond",
    breadcrumb: ["Home", "Diamond", "The Prettiest"],
    description: "The prettiest pair of diamond earrings for a dazzling look.",
    specifications: [
      { label: "Material", value: "Gold, Diamond" },
      { label: "Weight", value: "8g" },
      { label: "Purity", value: "18K" },
      { label: "Style", value: "Drop" },
    ],
    recommendedProducts: [],
  },
];

const goldProducts: Product[] = [
  {
    id: "bridal-jewellery",
    title: "Bridal Jewellery",
    price: 5000,
    image: "/assets/images/bridal.svg",
    link: "/gold",
    category: "gold",
    breadcrumb: ["Home", "Gold", "Bridal Jewellery"],
    description: "Traditional gold bridal jewellery set for your special day.",
    specifications: [
      { label: "Material", value: "Gold" },
      { label: "Weight", value: "50g" },
      { label: "Purity", value: "22K" },
      { label: "Style", value: "Bridal Set" },
    ],
    recommendedProducts: [],
  },
  {
    id: "necklace-set",
    title: "Necklace Set",
    price: 5000,
    image: "/assets/images/Carosuelimage.svg",
    link: "/gold",
    category: "gold",
    breadcrumb: ["Home", "Gold", "Necklace Set"],
    description: "Elegant gold necklace set suitable for all occasions.",
    specifications: [
      { label: "Material", value: "Gold" },
      { label: "Weight", value: "30g" },
      { label: "Purity", value: "22K" },
      { label: "Style", value: "Necklace Set" },
    ],
    recommendedProducts: [],
  },
  {
    id: "gold-bangles",
    title: "Gold Bangles",
    price: 5000,
    image: "/assets/images/bangleset.svg",
    link: "/gold",
    category: "gold",
    breadcrumb: ["Home", "Gold", "Gold Bangles"],
    description: "Classic gold bangles with intricate designs.",
    specifications: [
      { label: "Material", value: "Gold" },
      { label: "Weight", value: "20g" },
      { label: "Purity", value: "22K" },
      { label: "Style", value: "Bangle" },
    ],
    recommendedProducts: [],
  },
  {
    id: "gianna-ring",
    title: "Gianna Ring",
    price: 5000,
    image: "/assets/images/ringgold.svg",
    link: "/gold",
    category: "gold",
    breadcrumb: ["Home", "Gold", "Gianna Ring"],
    description: "Stylish gold ring with a modern touch.",
    specifications: [
      { label: "Material", value: "Gold" },
      { label: "Weight", value: "6g" },
      { label: "Purity", value: "22K" },
      { label: "Style", value: "Ring" },
    ],
    recommendedProducts: [],
  },
];

const silverProducts: Product[] = [
  {
    id: "bangles",
    title: "Bangles",
    price: 5000,
    image: "/assets/images/slivernecklac.svg",
    link: "/silver",
    category: "silver",
    breadcrumb: ["Home", "Silver", "Bangles"],
    description: "Elegant silver bangles for everyday wear.",
    specifications: [
      { label: "Material", value: "Silver" },
      { label: "Weight", value: "18g" },
      { label: "Purity", value: "925" },
      { label: "Style", value: "Bangle" },
    ],
    recommendedProducts: [],
  },
  {
    id: "necklace-set-silver",
    title: "Necklace Set",
    price: 5000,
    image: "/assets/images/necksliver.svg",
    link: "/silver",
    category: "silver",
    breadcrumb: ["Home", "Silver", "Necklace Set"],
    description: "Beautiful silver necklace set with intricate patterns.",
    specifications: [
      { label: "Material", value: "Silver" },
      { label: "Weight", value: "25g" },
      { label: "Purity", value: "925" },
      { label: "Style", value: "Necklace Set" },
    ],
    recommendedProducts: [],
  },
  {
    id: "silver-earring",
    title: "Silver Earring",
    price: 5000,
    image: "/assets/images/silver.svg",
    link: "/silver",
    category: "silver",
    breadcrumb: ["Home", "Silver", "Silver Earring"],
    description: "Chic silver earrings for a modern look.",
    specifications: [
      { label: "Material", value: "Silver" },
      { label: "Weight", value: "4g" },
      { label: "Purity", value: "925" },
      { label: "Style", value: "Stud" },
    ],
    recommendedProducts: [],
  },
  {
    id: "silver-bangle",
    title: "Silver Bangle",
    price: 5000,
    image: "/assets/images/silver-jain.svg",
    link: "/silver",
    category: "silver",
    breadcrumb: ["Home", "Silver", "Silver Bangle"],
    description: "Classic silver bangle with a polished finish.",
    specifications: [
      { label: "Material", value: "Silver" },
      { label: "Weight", value: "10g" },
      { label: "Purity", value: "925" },
      { label: "Style", value: "Bangle" },
    ],
    recommendedProducts: [],
  },
];

const allProducts: Product[] = [
  ...diamondProducts,
  ...goldProducts,
  ...silverProducts,
];

const featuredProducts: Product[] = [
  diamondProducts[0],
  diamondProducts[1],
  goldProducts[0],
  goldProducts[1],
  silverProducts[0],
  silverProducts[1],
];

const productCategories = [
  {
    name: "Gold",
    products: goldProducts,
  },
  {
    name: "Silver",
    products: silverProducts,
  },
  {
    name: "Diamond",
    products: diamondProducts,
  },
];

export {
  diamondProducts,
  goldProducts,
  silverProducts,
  allProducts,
  productCategories,
  featuredProducts,
};
