import Image from "next/image";
import Category from "./components/category/Category";
import Product from "./components/products/Product";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/category");
  const catData = await res.json();
  const all_category = await catData.categories;

  const products = await fetch("http://localhost:3000/api/products");
  const productsData = await products.json();
  const allProducts = await productsData.allProducts;

  return (
    <div>
      <section className="mx-auto">
        <div className="mt-5 flex items-center justify-center flex-col text-center">
          <h1 className="text-2xl">Featured Category </h1>
          <p>Get Your Desired Product from Featured Category!</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
          {all_category?.map((category, index) => (
            <Category key={index} category={category}></Category>
          ))}
        </div>
      </section>
      <section className="mx-auto">
        <div className="mt-5 flex items-center justify-center flex-col text-center">
          <h1 className="text-2xl">Featured Products</h1>
          <p>Check & Get Your Desired Product!!</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
          {allProducts?.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </section>
    </div>
  );
}
