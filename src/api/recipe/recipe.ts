import { AxiosRequestConfig } from 'axios';
import { API_URL } from '../../constants/constants';
import { Recipe } from '../../types/Recipe';
import axios from '../axios';

export const createRecipe = (recipe: Recipe, options: AxiosRequestConfig) =>
  axios.post(`${API_URL}/recipe`, recipe, options);

export const likeRecipe = (recipeId: string, options: AxiosRequestConfig) =>
  axios.post(`${API_URL}/recipe/like`, { recipeId }, options);

export const unlikeRecipe = (recipeId: string, options: AxiosRequestConfig) =>
  axios.post(`${API_URL}/recipe/unlike`, { recipeId }, options);

export const favRecipe = (recipeId: string, options: AxiosRequestConfig) =>
  axios.post(`${API_URL}/recipe/fav`, { recipeId }, options);

export const unfavRecipe = (recipeId: string, options: AxiosRequestConfig) =>
  axios.post(`${API_URL}/recipe/unfav`, { recipeId }, options);

export const getRecipes = (options: AxiosRequestConfig) =>
  axios.get(`${API_URL}/recipe`, options);

export const getMyRecipes = (options: AxiosRequestConfig) =>
  axios.get(`${API_URL}/recipe/myrecipes`, options);

export const getFavRecipes = (options: AxiosRequestConfig) =>
  axios.get(`${API_URL}/recipe/favs`, options);
