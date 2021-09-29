import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories";

interface IImporteCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImporteCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImporteCategory[] = [];
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (error) => {
          fs.promises.unlink(file.path);
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existsCategory = await this.categoriesRepository.findByName(name);

      if (!existsCategory) {
        await this.categoriesRepository.create({ name, description });
        console.log(`Create category: ${name}`);
      } else {
        console.log(`Category alread exist! Category ${name} no register!`);
      }
    });
  }
}

export { ImportCategoriesUseCase };
