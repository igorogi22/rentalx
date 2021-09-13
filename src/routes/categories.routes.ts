import { Router } from "express";

import { CategoriesRespository } from "../repositories";

const categoriesRoutes = Router();
const categoriesrepository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesrepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!!" });
  }

  categoriesrepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesrepository.list();

  return response.status(200).json(allCategories);
});

export { categoriesRoutes };
