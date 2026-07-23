import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Payment from "@/models/Payment";
import crypto from "crypto";


export async function POST(request: Request) {


  try {


    await connectDB();



    const body = await request.json();


    const { phone, amount } = body;



    if (!phone || !amount) {


      return NextResponse.json(

        {
          success: false,
          message: "Phone number and amount are required",
        },

        {
          status: 400,
        }

      );


    }





    const reference = `ZSN-${Date.now()}`;



    const accessToken =
      crypto.randomBytes(32).toString("hex");






    const paystackResponse = await fetch(

      "https://api.paystack.co/transaction/initialize",

      {


        method: "POST",


        headers: {


          Authorization:

          `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,


          "Content-Type":

          "application/json",

        },


        body: JSON.stringify({


          amount: Number(amount) * 100,


          email:

          "member@zawiyatu.com",



          reference,



          currency: "GHS",



          channels: [

            "mobile_money"

          ],




          mobile_money: {


            phone,


            provider: "mtn",

          },





          callback_url:


          `${process.env.NEXT_PUBLIC_URL}/payment/success?reference=${reference}&token=${accessToken}`



        }),


      }

    );






    const data = await paystackResponse.json();






    if (!data.status) {


      console.error(
        "Paystack Error:",
        data
      );


      return NextResponse.json(

        {

          success: false,

          message:

          data.message ||

          "Paystack initialization failed",

        },

        {

          status: 400,

        }

      );


    }






    await Payment.create({


      phone,


      amount,


      reference,


      accessToken,


      status: "pending",


    });







    return NextResponse.json(

      {


        success: true,


        authorizationUrl:

        data.data.authorization_url,


      }

    );






  } catch(error) {


    console.error(
      "Payment Error:",
      error
    );



    return NextResponse.json(

      {

        success: false,

        message:

        "Payment initialization failed",

      },

      {

        status: 500,

      }

    );


  }


}