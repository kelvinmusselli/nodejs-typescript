import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.list();
  return response.status(200).json(categories);
});

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category already exists' });
  }

  categoryRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
