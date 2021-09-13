import { Router } from "express";
import { CategoriesRespository } from "../repositories";

const categoriesRoutes = Router();
const categoriesrepository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    categoriesrepository.create({ name, description });
    
    return response.status(201).send();
})

export { categoriesRoutes };
