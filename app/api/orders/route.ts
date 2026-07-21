import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


// Create Order
export async function POST(request: Request) {

  try {

    await connectDB();

    const body = await request.json();

    const order = await Order.create(body);


    return NextResponse.json(
      {
        success: true,
        order,
      },
      {
        status: 201,
      }
    );


  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order",
        error,
      },
      {
        status: 500,
      }
    );

  }

}



// Get Orders (Admin)
export async function GET() {

  try {

    await connectDB();


    const orders = await Order.find()
      .sort({
        createdAt: -1,
      });


    return NextResponse.json(orders);


  } catch (error) {

    return NextResponse.json(
      {
        message: "Failed to fetch orders",
        error,
      },
      {
        status: 500,
      }
    );

  }

}