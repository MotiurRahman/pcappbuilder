import connectToDatabase from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, context) => {
  try {
    const client = await connectToDatabase();
    const products = client.db("pcbuilder").collection("products");
    const { params } = context;
    const categoruName = params.categoryName;
    //console.log("productId", productId);
    const catWiseProduct = await products
      .find({ category: categoruName })
      .toArray();
    //console.log("product", catWiseProduct);

    if (!catWiseProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "success", catWiseProduct },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json(
      { message: "Error fetching data", error: err },
      { status: 500 }
    );
  }
};
