import { container } from "tsyringe";

import {
  CategoriesRespository,
  ICategoriesRepository,
  ISpecificationsRepository,
  SpecificationsRepository,
} from "../../modules/cars/repositories";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRespository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
