"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const Category = ({ category }) => {
  const router = useRouter();
  const handleCategory = (category) => {
    router.push(`/category/${category}`);
  };
  return (
    <div
      onClick={() => {
        handleCategory(category);
      }}
      className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer"
    >
      <figure>
        <Image
          width={100}
          height={100}
          src="/images/category/kola.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{category.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default Category;
