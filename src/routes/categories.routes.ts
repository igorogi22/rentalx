import { Router } from "express";

import { CategoriesRespository } from "../modules/cars/repositories";
import { CreateCategoryService } from "../modules/cars/services";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoriesService = new CreateCategoryService(
    categoriesRepository
  );

  createCategoriesService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(200).json(allCategories);
});

export { categoriesRoutes };
