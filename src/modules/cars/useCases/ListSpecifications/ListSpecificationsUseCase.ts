import { Specification } from "../../entities";
import { SpecificationsRepository } from "../../repositories";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    const allSpecifications = this.specificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
