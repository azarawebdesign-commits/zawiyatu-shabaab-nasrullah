import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";



export async function GET() {

  try {

    await connectDB();


    const donations = await Donation.find()

      .sort({

        createdAt: -1,

      })

      .lean();



    return NextResponse.json({

      success: true,

      donations,

    });



  } catch(error) {


    console.error(error);


    return NextResponse.json(

      {

        success:false,

        message:"Failed to fetch donations",

      },

      {

        status:500,

      }

    );


  }

}







export async function POST(request: Request) {


  try {


    await connectDB();


    const body = await request.json();




    const donation = await Donation.create({

      donorName: body.donorName,

      phone: body.phone,

      amount: Number(body.amount),

      purpose: body.purpose || "General Support",

      paymentMethod: body.paymentMethod || "Mobile Money",

      paymentStatus: "Pending",

      date: body.date || new Date().toLocaleDateString(),

    });





    return NextResponse.json({

      success:true,

      donation,

    });





  } catch(error) {


    console.error(error);



    return NextResponse.json(

      {

        success:false,

        message:"Failed to create donation",

      },

      {

        status:500,

      }

    );


  }

}