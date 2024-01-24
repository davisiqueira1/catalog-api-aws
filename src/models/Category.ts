import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ownerID: { type: String, required: true },
});

const CategoryModel = model("Category", CategorySchema);

export { CategoryModel as Category };
