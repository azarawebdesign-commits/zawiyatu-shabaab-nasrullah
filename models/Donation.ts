import mongoose, { Schema } from "mongoose";

const DonationSchema = new Schema(
  {
    donorName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    purpose: {
      type: String,
      default: "General Support",
    },

    paymentMethod: {
      type: String,
      default: "Paystack",
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    transactionId: {
      type: String,
      default: "",
    },

    date: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Donation =
  mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);

export default Donation;