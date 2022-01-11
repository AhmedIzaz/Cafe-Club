import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 4,
      required: false,
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
    carts: [{ type: mongoose.Types.ObjectId, ref: "cart", required: false }],
    orders: [{ type: mongoose.Types.ObjectId, ref: "order", required: false }],
  },
  { timestamps: false }
);

const User = mongoose.model("User", userSchema);
export default User;
