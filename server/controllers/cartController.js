import Cart from "../models/Cart.js";
import Food from "../models/Food.js";

export const create_cart = async (req, res, next) => {
  try {
    const { food_id } = req.body;
    const { name, image, price } = await Food.findOne({ _id: food_id });
    const cart = await Cart.create({
      food_id,
      name,
      image,
      user_id: req.user_id,
      price,
    });
    return res.status(200).json({ cart }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const change_quantity = async (req, res, next) => {
  try {
    const { value, cart_id } = req.body;
    await Cart.findOneAndUpdate({ _id: cart_id }, { quantity: value });
    return res.status(200).json({ cart_updated: true }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const remove_cart = async (req, res, next) => {
  try {
    await Cart.findOneAndDelete({ _id: req.body.cart_id });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const delete_user_carts = async (req, res, next) => {
  try {
    await Cart.deleteMany({ user_id: req.user_id });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
