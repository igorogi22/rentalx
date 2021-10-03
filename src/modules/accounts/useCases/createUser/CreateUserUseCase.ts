import { inject, injectable } from "tsyringe";

import { ICreateUserDto } from "../../dtos";
import { IUsersRepository } from "../../repositories";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDto): Promise<void> {
    await this.userRepository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });
  }
}

export { CreateUserUseCase };
