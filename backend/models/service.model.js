import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    eligibility: {
      type: String,
      trim: true,
    },

    documents: [
      {
        type: String,
      },
    ],

    // applicationProcess: {
    //   type: String,
    //   trim: true,
    // },

    // officialWebsite: {
    //   type: String,
    //   trim: true,
    // },

    // serviceCharge: {
    //   type: Number,
    //   default: 0,
    // },

    status: {
      type: String,
      enum: ["active", "inactive"],
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
