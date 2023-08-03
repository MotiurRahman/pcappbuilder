import connectToDatabase from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, context) => {
  try {
    const client = await connectToDatabase();
    const products = client.db("pcbuilder").collection("products");
    const { params } = context;
    const productId = params.productsId;
    //console.log("productId", productId);
    const product = await products.findOne({ _id: new ObjectId(productId) });
    console.log("product", product);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "success", product }, { status: 200 });
  } catch (err) {
    console.error("Error fetching data:", err);
    return NextResponse.json(
      { message: "Error fetching data", error: err },
      { status: 500 }
    );
  }
};
