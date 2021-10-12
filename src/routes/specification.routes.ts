import { Router } from "express";

import "reflect-metadata";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import {
  ListSpecificationsController,
  CreateSpecificationController,
} from "../modules/cars/useCases";

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post("/", createSpecificationsController.handle);

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
