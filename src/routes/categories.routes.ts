import { Router } from "express";
import multer from "multer";

import {
  CreateCategoryController,
  ImportCategoriesController,
  ListCategoriesController,
} from "../modules/cars/useCases";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoriesController = new ImportCategoriesController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handler);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoriesController.handle
);

export { categoriesRoutes };
