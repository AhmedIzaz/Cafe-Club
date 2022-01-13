import Order from "../models/Order.js";

export const create_order = async (req, res, next) => {
  try {
    const { food_id_list, order_type, date } = req.body;
    const order = await Order.create({
      food_id_list,
      order_type,
      date,
      user_id: req.user_id,
    });
    return res.status(200).json({ order }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
