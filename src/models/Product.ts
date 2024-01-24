import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  ownerID: { type: String, required: true },
});

const ProductModel = model("Product", ProductSchema);

export { ProductModel as Product };
