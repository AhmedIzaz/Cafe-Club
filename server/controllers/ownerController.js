import jwt from "jsonwebtoken";
import Owner from "../models/Owner.js";
import bcrypt from "bcrypt";
import Order from "../models/Order.js";
import User from "../models/User.js";
export const owner_signup = async (req, res, next) => {
  try {
    const { name, email, password, number } = req.body;
    const owner_exist = await Owner.findOne({ email });
    if (owner_exist)
      return res.status(500).json({ message: "Owner already exist!" }).end();
    const encrypted_password = await bcrypt.hash(password, 11);
    await Owner.create({ name, email, password: encrypted_password, number });
    return res
      .status(200)
      .json({ message: "Owner created Successfully!" })
      .end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const owner_login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const owner = await Owner.findOne({ email });
    if (!owner)
      return res.status(500).json({ message: "Owner doesn't exist!" }).end();
    const password_matched = await bcrypt.compare(password, owner.password);
    if (!password_matched)
      return res
        .status(500)
        .json({ message: "password doesn't matched!" })
        .end();
    const token = await jwt.sign({ email, owner_id: owner._id }, "secret", {
      expiresIn: "1d",
    });
    const orders = await Order.find();
    return res.status(200).json({ owner, token, orders }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const delete_order_by_owner = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const owner_exist = await Owner.findOne({ _id: req.owner_id });
    if (!owner_exist)
      return res
        .status(500)
        .json({ message: "You dont have permission!" })
        .end();
    await Order.findOneAndDelete({ _id });
    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const get_customers = async (req, res, next) => {
  try {
    const customers = await User.find();
    return res.status(200).json({ customers }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
