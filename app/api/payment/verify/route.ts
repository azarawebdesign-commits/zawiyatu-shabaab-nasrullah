import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Payment from "@/models/Payment";


export async function POST(request: Request) {


  try {


    await connectDB();



    const { reference, token } =
      await request.json();




    if(!reference || !token){


      return NextResponse.json(

        {

          success:false,

          message:
          "Missing payment information",

        },

        {
          status:400,
        }

      );


    }






    // Verify payment with Paystack

    const paystackResponse =
      await fetch(

        `https://api.paystack.co/transaction/verify/${reference}`,

        {

          method:"GET",

          headers:{

            Authorization:

            `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,

          },

        }

      );





    const paystackData =
      await paystackResponse.json();






    if(

      !paystackData.status ||

      paystackData.data.status !== "success"

    ){


      return NextResponse.json(

        {

          success:false,

          message:
          "Payment has not been confirmed yet",

        },

        {
          status:400,
        }

      );


    }






    // Update payment record

    const payment =
      await Payment.findOneAndUpdate(

        {

          reference,

          accessToken: token,

        },


        {

          status:"success",

        },


        {

          new:true,

        }

      );






    if(!payment){


      return NextResponse.json(

        {

          success:false,

          message:
          "Payment record not found",

        },

        {
          status:404,
        }

      );


    }







    return NextResponse.json(

      {

        success:true,

        message:
        "Payment verified successfully",

      }

    );






  }catch(error){


    console.error(
      "Verification error:",
      error
    );



    return NextResponse.json(

      {

        success:false,

        message:
        "Payment verification failed",

      },

      {

        status:500,

      }

    );


  }


}