import { useEffect, useState } from 'react';
import { API_URL } from '../constants/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Recipe } from '../types/Recipe';

export interface RecipeHook {
  recipes: Recipe[];
  loading: boolean;
}

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state: RootState) => state.user.access_token);

  useEffect(() => {
    fetch(`${API_URL}/recipe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes(
          data.map((d: any) => ({
            title: d.recipeTitle,
            description: d.recipeDesc,
            image: d.recipeImageUrl,
          })),
        );
        setLoading(false);
      });
  }, []);

  return { recipes, loading };
}
