import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      donorName,
      phone,
      amount,
      purpose,
      email,
    } = body;

    if (!donorName || !phone || !amount) {
      return NextResponse.json(
        {
          success: false,
          message: "Donor name, phone number and amount are required",
        },
        {
          status: 400,
        }
      );
    }

    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid donation amount",
        },
        {
          status: 400,
        }
      );
    }

    const reference = `ZSN-DON-${Date.now()}`;

    const donation = await Donation.create({
      donorName,
      phone,
      amount: numericAmount,
      purpose: purpose || "General Support",
      paymentMethod: "Paystack",
      paymentStatus: "Pending",
      transactionId: reference,
      date: new Date().toLocaleDateString(),
    });

    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          amount: Math.round(numericAmount * 100),

          email:
            email ||
            `donor-${Date.now()}@zawiyatu-shabaab-nasrullah.com`,

          reference,

          currency: "GHS",

          channels: [
            "card",
            "mobile_money",
            "bank",
            "ussd",
          ],

          callback_url:
            `${process.env.NEXT_PUBLIC_URL}/donate/payment-success?reference=${reference}`,
        }),
      }
    );

    const data = await paystackResponse.json();

    if (!paystackResponse.ok || !data.status) {
      console.error("Paystack Donation Error:", data);

      await Donation.findByIdAndUpdate(
        donation._id,
        {
          paymentStatus: "Failed",
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            data.message ||
            "Paystack donation initialization failed",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      success: true,

      authorizationUrl:
        data.data.authorization_url,

      reference,
    });

  } catch (error) {
    console.error("Donation Paystack Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to initialize donation payment",
      },
      {
        status: 500,
      }
    );
  }
}