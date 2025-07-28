export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  link: string;
  category: string;
  metal: string;
  productType: string;
  gender: string;
  occasion: string;
  createdAt: Date;
  breadcrumb: string[];
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  recommendedProducts: Product[];
}
