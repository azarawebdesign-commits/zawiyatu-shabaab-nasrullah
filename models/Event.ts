import mongoose, { Schema, models } from "mongoose";

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Upcoming", "Past"],
      default: "Upcoming",
    },

    gallery: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Event =
  models.Event || mongoose.model("Event", EventSchema);

export default Event;