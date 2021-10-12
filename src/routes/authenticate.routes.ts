import { Router } from "express";

import { AuthenticateUserContoller } from "../modules/accounts/useCases/authenticateUser";

const authenticateRoutes = Router();

const authenticateUser = new AuthenticateUserContoller();

authenticateRoutes.post("/sessions", authenticateUser.handler);

export { authenticateRoutes };
