import { ICreateUserDto } from "../dtos";
import { User } from "../entities";

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
