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
    @inject("UserRepository")
    private userRpository: IUsersRepository
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.userRpository.findById(user_id);

    user.avatar = avatar_file;

    await this.userRpository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
