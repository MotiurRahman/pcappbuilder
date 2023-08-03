import connectToDatabase from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, response) => {
  try {
    // Connect the client to the server (optional starting in v4.7)
    const client = await connectToDatabase();
    // Send a ping to confirm a successful connection

    const products = client.db("pcbuilder").collection("products");

    const distinctCategories = await products
      .aggregate([{ $group: { _id: "$category" } }])
      .toArray();
    const categories = distinctCategories.map((category) => category._id);
    return NextResponse.json(
      {
        message: "success",
        categories,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json({ message: "err", err }, { status: 500 });
  }
};
