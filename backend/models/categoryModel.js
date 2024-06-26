import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  category_name: { type: String, required: true, unique: true },
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
