import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handler);

export { usersRoutes };
