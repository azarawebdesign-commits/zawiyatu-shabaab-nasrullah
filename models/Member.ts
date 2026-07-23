import mongoose, { Schema, models } from "mongoose";


const MemberSchema = new Schema(

  {

    // Personal Information

    fullName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    whatsapp: {
      type: String,
    },

    email: {
      type: String,
    },

    gender: {
      type: String,
      required: true,
    },

    dateOfBirth: {
      type: String,
    },


    // Contact Information

    address: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
    },


    // Membership Information

    dateJoined: {
      type: String,
    },

    membershipType: {
      type: String,
      required: true,
    },


    // Emergency Contact

    emergencyName: {
      type: String,
      required: true,
    },

    emergencyRelationship: {
      type: String,
      required: true,
    },

    emergencyPhone: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      default: "",
    },


    // System Information

    applicationReference: {
      type: String,
      required: true,
      unique: true,
    },


    status: {

      type: String,

      default: "Pending",

    },


    membershipId: {

      type: String,

      default: "",

    },


    executiveNotes: {

      type: String,

      default: "",

    },


  },

  {
    timestamps: true,
  }

);



const Member =
  models.Member ||
  mongoose.model("Member", MemberSchema);



export default Member;