import mongoose from "mongoose";

export const cartSchema = mongoose.Schema(
  {
    food_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: false }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
