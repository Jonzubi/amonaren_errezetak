import { useEffect, useState } from 'react';
import { API_URL } from '../constants/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Recipe } from '../types/Recipe';
import { getHeaderWithAccessToken } from '../utils/functions/axiosOptions';
import { getMyRecipes, getRecipes } from '../api/recipe/recipe';

export enum UseRecipesType {
  ALL,
  MINE,
  FAVS,
}

export function useRecipes(type: UseRecipesType) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state: RootState) => state.user.access_token);

  const typeToFetch = [getRecipes, getMyRecipes];
  const fetchUrl = typeToFetch[type];

  const fetchData = () => {
    setRecipes([]);
    fetchUrl(getHeaderWithAccessToken(token)).then((data) => {
      setRecipes(
        data.data.map((d: any) => ({
          recipeId: d._id,
          title: d.recipeTitle,
          description: d.recipeDesc,
          image: d.recipeImageUrl,
          createdBy: d.createdBy,
          creationDate: d.creationDate,
          likeCount: d.likeCount,
          favCount: d.favCount,
          hasLiked: d.hasLiked,
          hasFaved: d.hasFaved,
        })),
      );
      setLoading(false);
    });
  };

  const refreshRecipes = () => fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return { recipes, loading, refreshRecipes };
}
