import mongoose, { Schema, models } from "mongoose";


const OrderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    items: [
      {
        id: String,
        name: String,
        price: Number,
        quantity: Number,
        size: String,
      },
    ],

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);


const Order =
  models.Order || mongoose.model("Order", OrderSchema);


export default Order;