import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";


export async function POST(request: Request) {

  try {


    await connectDB();



    const data = await request.json();



    const member = await Member.create({

      ...data,

      status: "Pending",

    });





    return NextResponse.json(

      {

        success: true,

        message: "Registration submitted successfully",

        member,

      },

      {

        status: 201,

      }

    );




  } catch (error) {


    console.error("Registration Error:", error);



    return NextResponse.json(

      {

        success: false,

        message: "Registration failed",

      },

      {

        status: 500,

      }

    );


  }

}