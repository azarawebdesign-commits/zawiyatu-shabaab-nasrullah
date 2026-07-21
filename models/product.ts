import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    sizes: {
      type: [String],
      default: [],
    },

    category: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    badge: {
      type: String,
      enum: ["New", "Best Seller", "Sale"],
    },
  },
  {
    timestamps: true,
  }
);


const Product =
  models.Product || model("Product", ProductSchema);


export default Product;