import { Router } from "express";
import { categoryController } from "@controllers/CategoryController";

const router = Router();

router.use("/category", categoryController);

export default router;
