"use client";
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import ProductRating from "./ProductRating";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Products = ({ product }) => {
  const { _id, image, productName, category, price, status, individualRating } =
    product;
  const router = useRouter();

  const productDetails = (id) => {
    router.push(`/products/${id}`);
  };
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl cursor-pointer"
      onClick={() => {
        productDetails(_id);
      }}
    >
      <figure>
        <Image
          width={120}
          height={100}
          src="/images/products/kola.jpg"
          alt="kola"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}!
          <div className="badge badge-secondary">
            <FaBangladeshiTakaSign /> {price}
          </div>
        </h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="flex flex-row justify-between">
          <div className="badge badge-outline">
            <BiCategory /> {category}
          </div>
          <div className="badge badge-outline">{status}</div>
        </div>
        <div className="flex justify-end items-center">
          <ProductRating rating={individualRating}></ProductRating>
        </div>
      </div>
    </div>
  );
};

export default Products;
