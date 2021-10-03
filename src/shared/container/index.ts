import { container } from "tsyringe";

import {
  IUsersRepository,
  UsersRepository,
} from "../../modules/accounts/repositories";
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

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
