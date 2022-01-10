import mongoose from "mongoose";

const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 4,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minLength: 4,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
