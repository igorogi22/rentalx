import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRpository: IUsersRepository
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRpository.findById(user_id);

    user.avatar = avatar_file;

    await this.usersRpository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
