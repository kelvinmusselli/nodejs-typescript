import { Category } from '../model/Category';
import {
  ICategoryRepository,
  ICreatCategoryDTO,
} from './ICategoriesRepository';

class PostgressCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreatCategoryDTO): void {
    console.log({ name, description });
  }
}

export { PostgressCategoriesRepository };
