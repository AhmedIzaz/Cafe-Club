import mongoose from "mongoose";
import { cartSchema } from "./Cart.js";

const orderSchema = mongoose.Schema(
  {
    food_list: [cartSchema],
    type: {
      type: String,
      required: true,
    },
    address: String,
    price: {
      type: Number,
      required: true,
    },
    date_time: [String],
    user_id: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    user_number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
