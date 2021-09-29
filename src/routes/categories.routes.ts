import { Router } from "express";
import multer from "multer";

import {
  importCategoriesController,
  listCategoriesController,
} from "../modules/cars/useCases";
import { CreateCategoryController } from "../modules/cars/useCases/CreateCategory/CreateCategoryController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handler);

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
