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
    id,
    name,
    email,
    driver_license,
    password,
    avatar,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      driver_license,
      password,
      avatar,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    return user;
  }
}

export { UsersRepository };
