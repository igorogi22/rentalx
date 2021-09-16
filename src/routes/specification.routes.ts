import { Router } from "express";

import {
  createSpecificationsController,
  listSpecificationsController,
} from "../modules/cars/useCases";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationRoutes };
