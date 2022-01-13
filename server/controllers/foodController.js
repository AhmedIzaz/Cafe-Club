import Category from "../models/Category.js";
import Food from "../models/Food.js";

export const food_description = async (req, res, next) => {
  try {
    const food = await Food.findOne({ _id: req.params._id });
    return res.status(200).json({ food }).end();
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const create_food = async (req, res, next) => {
  try {
    const { name, image, description, price, category_id } = req.body;
    const food = await Food.create({
      name,
      image,
      description,
      price,
      category_id,
    });
    return res.status(200).json({ message: "Food created!", food }).end();
  } catch (error) {
    return res.status(404).json({ error: error.message }).end();
  }
};
