import mongoose, { Schema, models } from "mongoose";


const PaymentSchema = new Schema(

  {

    phone: {

      type: String,

      required: true,

    },


    amount: {

      type: Number,

      required: true,

    },


    reference: {

      type: String,

      required: true,

      unique: true,

    },


    accessToken: {

      type: String,

      required: true,

      unique: true,

    },


    status: {

      type: String,

      default: "pending",

    },


    email: {

      type: String,

      default: "",

    },


  },

  {
    timestamps: true,
  }

);



const Payment =

  models.Payment ||

  mongoose.model(
    "Payment",
    PaymentSchema
  );



export default Payment;