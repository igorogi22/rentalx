import { getRepository, Repository } from "typeorm";

import { IUsersRepository } from "..";

import { ICreateUserDto } from "../../dtos";
import { User } from "../../entities";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
