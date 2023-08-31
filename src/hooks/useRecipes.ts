import { useEffect, useState } from 'react';
import { Recipe } from '../types/Recipe';
import { getHeaderWithAccessToken } from '../utils/functions/axiosOptions';
import {
  getFavRecipes,
  getMyRecipes,
  getRecipeById,
  getRecipes,
} from '../api/recipe/recipe';
import { useUserStore } from 'src/zustand/userStore';

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
  const { access_token } = useUserStore();

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
    fetchUrl(getHeaderWithAccessToken(access_token), recipeId, filterText).then(
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
