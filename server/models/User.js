import mongoose from "mongoose";

const userSchema = mongoose.Schema(
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
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: false }
);

const User = mongoose.model("User", userSchema);
export default User;
