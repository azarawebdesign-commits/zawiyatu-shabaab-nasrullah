import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();

    const { id } = await params;

    const body = await request.json();


    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      {
        status: body.status,
      },
      {
        new: true,
      }
    );


    return NextResponse.json(updatedOrder);


  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to update order",
        error,
      },
      {
        status: 500,
      }
    );

  }

}