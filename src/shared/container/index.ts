import { container } from "tsyringe";

import {
  CategoriesRespository,
  ICategoriesRepository,
} from "../../modules/cars/repositories";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRespository
);
