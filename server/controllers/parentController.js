import Parent from "../models/Parent.js";

export const create_parent = async (req, res, next) => {
  try {
    const { childrens } = req.body;
    const parent = await Parent.create({ childrens });
    return res.json({ parent }).end();
  } catch (error) {
    return res.json({ error: error.message }).end();
  }
};
