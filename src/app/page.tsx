import { ProductCard } from "@/components/store/_Elements/ProductCard";
import Footer from "@/components/store/Footer";
import Header from "@/components/store/Header";

import ProductImage from '../../public/card-product-image.png'
import { Carroussel } from "@/components/store/_Elements/Carroussel";

export default function Home() {
  return (
    <div>
      <Header />
      <Carroussel />
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
