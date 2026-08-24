import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Member from "@/models/Member";

export async function POST(request: Request) {
  try {
    await connectDB();

    const data = await request.json();

    /* ----------------------------- */
    /* Required fields */
    /* ----------------------------- */

    const requiredFields = [
      "fullName",
      "phone",
      "gender",
      "address",
      "membershipType",
      "emergencyName",
      "emergencyRelationship",
      "emergencyPhone",
    ];

    for (const field of requiredFields) {
      if (
        !data[field] ||
        typeof data[field] !== "string" ||
        !data[field].trim()
      ) {
        return NextResponse.json(
          {
            success: false,
            message: `${field} is required`,
          },
          {
            status: 400,
          }
        );
      }
    }

    /* ----------------------------- */
    /* Generate application reference */
    /* ----------------------------- */

    const year = new Date().getFullYear();

    const randomNumber = Math.floor(
      100000 + Math.random() * 900000
    );

    const applicationReference =
      `ZSN-APP-${year}-${randomNumber}`;

    /* ----------------------------- */
    /* Prevent reference collision */
    /* ----------------------------- */

    const existingApplication =
      await Member.findOne({
        applicationReference,
      });

    if (existingApplication) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to generate application reference. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    /* ----------------------------- */
    /* Create application */
    /* ----------------------------- */

    const member = await Member.create({
      fullName: data.fullName.trim(),

      phone: data.phone.trim(),

      whatsapp:
        typeof data.whatsapp === "string"
          ? data.whatsapp.trim()
          : "",

      email:
        typeof data.email === "string"
          ? data.email.trim()
          : "",

      gender: data.gender.trim(),

      dateOfBirth:
        typeof data.dateOfBirth === "string"
          ? data.dateOfBirth.trim()
          : "",

      address: data.address.trim(),

      occupation:
        typeof data.occupation === "string"
          ? data.occupation.trim()
          : "",

      dateJoined:
        typeof data.dateJoined === "string"
          ? data.dateJoined.trim()
          : "",

      membershipType:
        data.membershipType.trim(),

      emergencyName:
        data.emergencyName.trim(),

      emergencyRelationship:
        data.emergencyRelationship.trim(),

      emergencyPhone:
        data.emergencyPhone.trim(),

      photo:
        typeof data.photo === "string"
          ? data.photo.trim()
          : "",

      applicationReference,

      status: "Pending",

      membershipId: "",

      executiveNotes: "",
    });

    /* ----------------------------- */
    /* Success */
    /* ----------------------------- */

    return NextResponse.json(
      {
        success: true,

        message:
          "Registration submitted successfully",

        applicationReference,

        member,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Registration Error:",
      error
    );

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