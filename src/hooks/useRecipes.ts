import { useEffect, useState } from 'react';
import { API_URL } from '../constants/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Recipe } from '../types/Recipe';

export function useRecipes(useMyRecipes?: boolean) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state: RootState) => state.user.access_token);

  const fetchUrl = !useMyRecipes
    ? `${API_URL}/recipe`
    : `${API_URL}/recipe/myrecipes`;

  const fetchData = () => {
    fetch(fetchUrl, {
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
