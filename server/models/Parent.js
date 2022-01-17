import mongoose from "mongoose";

const childrenSchema = mongoose.Schema({
  name: String,
  age: String,
});

const parentSchema = mongoose.Schema({
  childrens: [childrenSchema],
});

const Parent = mongoose.model("Parent", parentSchema);
export default Parent;
