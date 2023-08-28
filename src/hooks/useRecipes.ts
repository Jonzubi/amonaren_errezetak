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

export const enum UseRecipesType {
  ALL,
  MINE,
  FAVS,
  BYID,
  FILTER,
}

const emptyUseRecipesReturnType: UseRecipesReturnType = {
  recipes: [],
  loading: false,
  refreshRecipes: () => {},
};

export function useRecipes(
  type: UseRecipesType,
  recipeId?: string,
  filterText?: string,
): UseRecipesReturnType {
  if (type === UseRecipesType.BYID && recipeId === undefined) {
    return emptyUseRecipesReturnType;
  }
  if (type === UseRecipesType.FILTER && filterText === undefined) {
    return emptyUseRecipesReturnType;
  }
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state: RootState) => state.user.access_token);

  const typeToFetchMap = {
    [UseRecipesType.ALL]: getRecipes,
    [UseRecipesType.MINE]: getMyRecipes,
    [UseRecipesType.FAVS]: getFavRecipes,
    [UseRecipesType.BYID]: getRecipeById,
    [UseRecipesType.FILTER]: getRecipes,
  };

  const fetchUrl = typeToFetchMap[type];

  const fetchData = (filterText: string = '') => {
    setRecipes([]);
    setLoading(true);
    fetchUrl(getHeaderWithAccessToken(token), recipeId, filterText).then(
      (data) => {
        setRecipes(
          data.data.map((d: any) => ({
            recipeId: d._id,
            title: d.recipeTitle,
            description: d.recipeDesc,
            image: d.recipeImageUrl,
            createdBy: d.createdBy,
            creationDate: d.creationDate,
            steps: d.steps,
            ingredients: d.ingredients,
            likeCount: d.likeCount,
            favCount: d.favCount,
            hasLiked: d.hasLiked,
            hasFaved: d.hasFaved,
          })),
        );
        setLoading(false);
      },
    );
  };

  const refreshRecipes = (filterText: string = '') => fetchData(filterText);

  useEffect(() => {
    fetchData();
  }, []);

  return { recipes, loading, refreshRecipes };
}

interface UseRecipesReturnType {
  recipes: Recipe[];
  loading: boolean;
  refreshRecipes: (filterText?: string) => void;
}
