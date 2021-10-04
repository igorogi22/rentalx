import { hash } from "bcrypt";
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
    email,
    driver_license,
    password,
  }: ICreateUserDto): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!!");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
