import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    food_id_list: [String],
    order_type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
