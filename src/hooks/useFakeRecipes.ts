import { useEffect, useState } from 'react';
import { API_URL } from '../constants/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Recipe } from '../types/Recipe';
import { getHeaderWithAccessToken } from '../utils/functions/axiosOptions';
import {
  getFavRecipes,
  getMyRecipes,
  getRecipeById,
  getRecipes,
} from '../api/recipe/recipe';
import { faker } from '@faker-js/faker';

export const enum UseRecipesType {
  ALL,
  MINE,
  FAVS,
  BYID,
}

const getFakeData = () =>
  Array(10)
    .fill(null)
    .map((a) => ({
      recipeId: faker.string.uuid(),
      title: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      image: faker.image.urlLoremFlickr({ category: 'food' }),
      createdBy: {
        username: faker.internet.userName(),
        imageUrl: faker.internet.avatar(),
      },
      creationDate: faker.date.recent(),
      steps: [],
      ingredients: [],
      likeCount: faker.number.int({
        min: 0,
        max: 15,
      }),
      favCount: faker.number.int({
        min: 0,
        max: 15,
      }),
      hasLiked: false,
      hasFaved: false,
    }));

export function useFakeRecipes(): any {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setRecipes([]);
    setLoading(true);

    setRecipes(getFakeData());
    setLoading(false);
  };

  const refreshRecipes = () => fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return { recipes, loading, refreshRecipes };
}
