import { Router } from "express";

import { createSpecificationsController } from "../modules/cars/useCases";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

export { specificationRoutes };
