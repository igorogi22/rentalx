import { Router } from "express";
import multer from "multer";

import { uploadConfig } from "../config";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handler);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handler
);

export { usersRoutes };
