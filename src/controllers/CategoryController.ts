import { ApiError } from "@errors/ApiError";
import CategoryService from "@services/CategoryService";
import { ICreateCategory } from "../types/ICreateCategory";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  await CategoryService.getAll()
    .then((categories) => {
      res.json(categories);
    })
    .catch((e) => {
      const error = e as ApiError;
      res.status(error.statusCode).json({ message: error.message });
    });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await CategoryService.deleteCategory(id)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      const error = e as ApiError;
      res.status(error.statusCode).json({ message: error.message });
    });
});

router.post("/", async (req, res) => {
  const categoryData: ICreateCategory = {
    title: req.body.title,
    description: req.body.description,
    ownerID: req.body.ownerID,
  };

  await CategoryService.createCategory(categoryData)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      const error = e as ApiError;
      res.status(error.statusCode).json({ message: error.message });
    });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const categoryData: ICreateCategory = {
    title: req.body.title,
    description: req.body.description,
    ownerID: req.body.ownerID,
  };

  await CategoryService.updateCategory(id, categoryData)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      const error = e as ApiError;
      res.status(error.statusCode).json({ message: error.message });
    });
});

export { router as categoryController };
