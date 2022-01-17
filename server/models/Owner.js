import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 4,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    number: {
      type: String,
      required: true,
      minLength: 11,
    },
  },
  { timestamps: false }
);

const Owner = mongoose.model("Owner", ownerSchema);
export default Owner;
