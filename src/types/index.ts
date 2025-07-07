export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  link: string;
  category: string;
  breadcrumb: string[];
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  recommendedProducts: Product[];
  // isNew?: boolean;
  // isFeatured?: boolean;
  // isPopular?: boolean;
  // isOnSale?: boolean;
  // discount?: number;
  // rating?: number;
  // reviews?: number;
  // stock?: number;
  // tags?: string[];
  // createdAt?: string;
  // updatedAt?: string;
}
