import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

/**
 * Definir o retorno da função - feito
 * Corrigir o retorno com erro - feito
 * Acessar o repositório - feito
 * DIP - Dependency Inversion Principle
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryService };
