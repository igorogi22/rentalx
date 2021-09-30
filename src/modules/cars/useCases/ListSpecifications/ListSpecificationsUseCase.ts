import { container, inject, injectable } from "tsyringe";

import { Specification } from "../../entities";
import { SpecificationsRepository } from "../../repositories";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: SpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const allSpecifications = await this.specificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
