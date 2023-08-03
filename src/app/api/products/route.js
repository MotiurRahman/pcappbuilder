import connectToDatabase from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, response) => {
  try {
    const client = await connectToDatabase();
    const products = client.db("pcbuilder").collection("products");

    const allProductsCursor = await products.aggregate([
      { $sample: { size: 6 } },
    ]);

    // Convert the cursor to an array to get the actual documents
    const allProducts = await allProductsCursor.toArray();

    //request.send({ message: "success", status: 200, data: allProducts });

    return NextResponse.json(
      { message: "success", allProducts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "err", err }, { status: 500 });
  }
};
