import { ProductCard } from "@/components/store/_Elements/ProductCard";
import Footer from "@/components/store/Footer";
import Header from "@/components/store/Header";

import ProductImage from '../../public/card-product-image.png'

export default function Home() {
  return (
    <div>
      <Header />
      home page
      <div className="flex gap-2 mx-auto w-full max-w-5xl">
        <ProductCard image={ProductImage} price={139.90} priceWithoutDiscount={70.00} productName="Denim Skirt" urlProduct="denim-skirt" />
        <ProductCard image={ProductImage} price={139.90} priceWithoutDiscount={70.00} productName="Denim Skirt" urlProduct="denim-skirt" />
        <ProductCard image={ProductImage} price={139.90} priceWithoutDiscount={70.00} productName="Denim Skirt" urlProduct="denim-skirt" />
        <ProductCard image={ProductImage} price={139.90} priceWithoutDiscount={70.00} productName="Denim Skirt" urlProduct="denim-skirt" />

      </div>
      <Footer />
    </div>
  );
}
