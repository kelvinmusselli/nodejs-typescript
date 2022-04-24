import { Category } from '../model/Category';

export interface ICreatCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreatCategoryDTO): void;
}

export { ICategoryRepository };
