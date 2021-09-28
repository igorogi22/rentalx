import { Router } from "express";
import multer from "multer";

import {
  importCategoriesController,
  listCategoriesController,
  createCategoryController,
} from "../modules/cars/useCases";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handler(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
