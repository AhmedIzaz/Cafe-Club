import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";
export const signup = async (req, res, next) => {
  try {
    const { name, email, password, number, image } = req.body;
    const user_exist = await User.findOne({ email });
    if (user_exist) return res.json({ message: "User already exist!" });
    const encrypted_password = await bcrypt.hash(password, 11);
    if (!encrypted_password)
      return res.json({ message: "Password can't encrypt" });
    await User.create({
      name,
      email,
      password: encrypted_password,
      number,
      image,
    });
    return res
      .status(200)
      .json({ message: "User created Successfully!" })
      .end();
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(500).json({ message: "User not found!" }).end();
    const password_matched = await bcrypt.compare(password, user.password);
    if (!password_matched)
      return res
        .status(500)
        .json({ message: "password doesn't matched!" })
        .end();
    const token = await jwt.sign({ email, user_id: user._id }, "secret", {
      expiresIn: "1d",
    });
    const carts = await Cart.find({ user_id: user._id });
    const order = await Order.findOne({ user_id: user._id });
    return res.json({ user, token, carts, order }).end();
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const get_carts_and_orders = async (req, res, next) => {
  try {
    const carts = await Cart.find({ user_id: req.user_id });
    const order = await Order.findOne({ user_id: req.user_id });
    return res.status(200).json({ carts, order }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
