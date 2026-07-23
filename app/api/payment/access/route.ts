import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import RegistrationAccess from "@/models/RegistrationAccess";
import Payment from "@/models/Payment";
import crypto from "crypto";


export async function POST(request: Request) {

  try {

    await connectDB();


    const {
      reference,
    } = await request.json();



    if (!reference) {

      return NextResponse.json(
        {
          success:false,
          message:"Payment reference required",
        },
        {
          status:400,
        }
      );

    }



    const payment =
      await Payment.findOne({

        paymentReference:
          reference,

        status:
          "Paid",

      });



    if (!payment) {

      return NextResponse.json(
        {
          success:false,
          message:"Payment not verified",
        },
        {
          status:400,
        }
      );

    }





    const existingAccess =
      await RegistrationAccess.findOne({

        paymentReference:
          reference,

      });



    if(existingAccess){

      return NextResponse.json({

        success:true,

        token:
          existingAccess.token,

      });

    }





    const token =
      crypto
        .randomBytes(32)
        .toString("hex");





    const access =
      await RegistrationAccess.create({

        paymentReference:
          reference,

        token,

        used:false,

      });






    return NextResponse.json({

      success:true,

      token,

    });




  } catch(error) {


    console.error(error);



    return NextResponse.json(

      {
        success:false,
        message:"Access generation failed",
      },

      {
        status:500,
      }

    );


  }

}