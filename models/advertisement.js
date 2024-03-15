import mongoose from "mongoose";

const advertisementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],
    location: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Advertisement = mongoose.model(
  "Advertisement",
  advertisementSchema
);
