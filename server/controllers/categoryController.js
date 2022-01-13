import Category from "../models/Category.js";
import Food from "../models/Food.js";

export const categories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ categories }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const create_category = async (req, res, next) => {
  try {
    await Category.create({ ...req.body });
    return res.status(200).json({ message: "Category Added!" }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};

export const category_foods = async (req, res, next) => {
  try {
    const foods = await Food.find({ category_id: req.params.category_id });
    return res.status(200).json({ foods }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
