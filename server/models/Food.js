import mongoose from "mongoose";

const FoodSchema = mongoose.Schema({
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

    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", FoodSchema);
export default Food;
