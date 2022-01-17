import Cart from "../models/Cart.js";
import Order from "../models/Order.js";

export const create_order = async (req, res, next) => {
  try {
    const { carts, type, date_time, price, user_name } = req.body;
    const order = await Order.create({
      food_list: carts,
      type,
      date_time,
      user_id: req.user_id,
      user_name,
      price,
    });
    if (!order) return res.status(500).end();
    await Cart.deleteMany({ user_id: req.user_id });
    return res.status(200).json({ order }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const delete_order = async (req, res, next) => {
  try {
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
