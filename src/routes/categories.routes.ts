import { Router } from "express";

import { CategoriesRespository } from "../modules/cars/repositories";
import { createCategoryController } from "../modules/cars/useCases";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handler(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(200).json(allCategories);
});

export { categoriesRoutes };
