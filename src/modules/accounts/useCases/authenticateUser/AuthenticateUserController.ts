import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from ".";

class AuthenticateUserContoller {
  async handler(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const authenticate = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.json(authenticate).send();
  }
}

export { AuthenticateUserContoller };
