import { ICreateUserDto } from "../dtos";

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
}

export { IUsersRepository };
