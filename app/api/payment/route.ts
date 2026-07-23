import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Payment from "@/models/Payment";


export async function POST(request: Request) {

  try {

    await connectDB();


    const {
      phone,
      amount,
    } = await request.json();



    if (!phone) {

      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required",
        },
        {
          status: 400,
        }
      );

    }



    const date = new Date();


    const paymentReference =
      `PAY-ZSN-${date.getFullYear()}${String(
        date.getMonth() + 1
      ).padStart(2, "0")}${String(
        date.getDate()
      ).padStart(2, "0")}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;




    const payment = await Payment.create({

      paymentReference,

      phone,

      amount: amount || 200,

      method: "Mobile Money",

      status: "Pending",

    });




    return NextResponse.json({

      success: true,

      paymentReference:

        payment.paymentReference,

      paymentId:

        payment._id,

    });



  } catch(error) {


    console.error(error);


    return NextResponse.json(

      {
        success:false,
        message:"Payment initialization failed",
      },

      {
        status:500,
      }

    );


  }

}