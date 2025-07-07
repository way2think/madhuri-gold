import { notFound } from "next/navigation";
import { allProducts, goldProducts } from "@/data/products";
import ProductDetail from "@/components/ProductDetails/ProductDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <ProductDetail
      image={product.image}
      title={product.title}
      price={product.price}
      breadcrumb={product.breadcrumb}
      description={product.description}
      specifications={product.specifications}
      recommendedProducts={goldProducts}
    />
  );
};

export default ProductDetailPage;

export async function generateStaticParams() {
  return Promise.resolve(
    allProducts.map((product) => ({
      id: product.id,
    }))
  );
}
