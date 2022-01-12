import Category from "../models/Category.js";

export const categories = async (req, res, next) => {
  try {
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const create_category = async (req, res, next) => {
  try {
    await Category.create({ ...req.body });
    return res.status(200).json({ message: "Category Added!" }).end();
  } catch (error) {
    return res.json({ error: error.message });
  }
};
