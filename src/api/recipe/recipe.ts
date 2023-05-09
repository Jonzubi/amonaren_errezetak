import { API_URL } from '../../constants/constants';
import { Recipe } from '../../types/Recipe';
import axios from '../axios';

export const createRecipe = (recipe: Recipe) =>
  axios.post(`${API_URL}/recipe`, recipe);
