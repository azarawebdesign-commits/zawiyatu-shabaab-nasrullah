import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/product";


// Get all products

export async function GET() {

  try {

    await connectDB();

    const products = await Product.find()
      .sort({
        createdAt: -1,
      });


    return NextResponse.json(products);


  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to fetch products",
        error,
      },
      {
        status: 500,
      }
    );

  }

}



// Create product

export async function POST(request: Request) {

  try {

    await connectDB();


    const body = await request.json();


    const product = await Product.create(body);


    return NextResponse.json(
      product,
      {
        status: 201,
      }
    );


  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to create product",
        error,
      },
      {
        status: 500,
      }
    );

  }

}