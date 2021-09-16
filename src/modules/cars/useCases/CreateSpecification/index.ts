import { SpecificationsRepository } from "../../repositories";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepositories = SpecificationsRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepositories
);
const createSpecificationsController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationsController };
