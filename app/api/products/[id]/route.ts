import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/product";


// Update Product

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();

    const { id } = await params;

    const body = await request.json();


    const product = await Product.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );


    return NextResponse.json(product);


  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to update product",
        error,
      },
      {
        status: 500,
      }
    );

  }

}



// Delete Product

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();

    const { id } = await params;


    await Product.findByIdAndDelete(id);


    return NextResponse.json({
      success: true,
      message: "Product deleted",
    });


  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to delete product",
        error,
      },
      {
        status: 500,
      }
    );

  }

}