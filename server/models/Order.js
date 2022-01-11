import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
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
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
