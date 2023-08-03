import React from "react";

const page = async ({ params }) => {
  const categoryName = params.category;
  const categoryWiseProduct = await fetch(
    `http://localhost:3000/api/category/${categoryName}`
  );
  const res = await categoryWiseProduct.json();

  const products = res.catWiseProduct;

  //console.log(res);

  return (
    <div>
      <h1>this is category page:{products.length}</h1>
    </div>
  );
};

export default page;
