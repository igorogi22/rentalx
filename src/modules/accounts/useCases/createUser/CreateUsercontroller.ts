import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { CreateUserUseCase } from ".";

class CreateUserController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { name, username, email, driver_license, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      username,
      email,
      driver_license,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
