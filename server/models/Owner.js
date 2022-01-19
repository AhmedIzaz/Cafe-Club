import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

const Owner = mongoose.model("Owner", ownerSchema);
export default Owner;
