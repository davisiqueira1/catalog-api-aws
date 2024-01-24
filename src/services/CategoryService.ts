import { Category } from "@models/Category";
import { ICreateCategory } from "../types/ICreateCategory";
import { IUpdateCategory } from "../types/IUpdateCategory";
import { ApiError } from "@errors/ApiError";

const getAll = async () => {
  return await Category.find().catch((err) => {
    throw new ApiError("Error on get categories", 500);
  });
};

const deleteCategory = async (id: string) => {
  const category = await Category.findById(id).catch((err) => {
    throw new ApiError("Invalid id", 400);
  });

  if (!category) throw new ApiError("Category not found", 404);

  return await category.deleteOne().catch((err) => {
    throw new ApiError("Error on delete category", 500);
  });
};

const createCategory = async (categoryData: ICreateCategory) => {
  try {
    const category = new Category(categoryData);
    const newCategory = await category.save();
    return newCategory;
  } catch (err) {
    throw new ApiError("Error on create category", 500);
  }
};

const updateCategory = async (id: string, categoryData: IUpdateCategory) => {
  const category = await Category.findById(id).catch((err) => {
    throw new ApiError("Invalid id", 500);
  });

  if (!category) throw new ApiError("Category not found", 404);

  category.title = categoryData.title || category.title;
  category.description = categoryData.description || category.description;
  category.ownerID = categoryData.ownerID || category.ownerID;

  return await category.save().catch((err) => {
    throw new ApiError("Error on update category", 500);
  });
};

export default { getAll, deleteCategory, createCategory, updateCategory };
