import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


// Create Order
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const now = new Date();

    const date =
      `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;

    const count = await Order.countDocuments();

    const orderNumber = `ZSN-${date}-${String(count + 1).padStart(4, "0")}`;

    const order = await Order.create({
      ...body,
      orderNumber,
      status: "Pending",
    });

    return NextResponse.json(
      {
        success: true,
        order,
        orderNumber,
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

    const orders = await Order.find().sort({
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