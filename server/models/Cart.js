import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    food_id: {
      type: mongoose.Types.ObjectId,
      ref: "food",
      required: true,
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: false }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
