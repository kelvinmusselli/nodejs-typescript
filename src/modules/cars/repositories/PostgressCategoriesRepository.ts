import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreatCategoryDTO,
} from './ICategoriesRepository';

class PostgressCategoriesRepository implements ICategoriesRepository {
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
