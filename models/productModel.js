import { Schema, model } from "mongoose";
  

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    color:{
        type:String
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

const ProductModel = model("Product", ProductSchema)

export default ProductModel;

