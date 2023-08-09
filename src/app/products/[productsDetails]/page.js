import React from "react";

const page = async ({ params }) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${params.productsDetails}`
  );
  const product = await res.json();
  const productDetails = await product.product;

  const { Brand, Model } = productDetails.keyFeatures;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={"/images/products/kola.jpg"}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">
              {productDetails?.productName}
            </h1>
            <p className="p-2">Category:{productDetails?.category}</p>
            <p className="p-2">Status:{productDetails?.status}</p>
            <p className="p-2">Price:{productDetails?.price}</p>
            <p className="p-2">Description:{productDetails?.description}</p>
            <p className="p-2">
              Key Features: Brand: {Brand}, Model: {Model}
            </p>
            <p className="p-2">
              Individual Rating : {productDetails?.individualRating}
            </p>
            <p className="p-2">
              Average Rating : {productDetails?.averageRating}
            </p>
            <h1 className="text-2xl">User Reviews:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* {reviews.map((review, index) => (
                <Reviews key={index} review={review}></Reviews>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
