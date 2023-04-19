import { useEffect, useState } from 'react';
import { API_URL } from '../constants/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export async function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const token = useSelector((state: RootState) => state.user.access_token);

  useEffect(() => {
    fetch(`${API_URL}/recipe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return recipes;
}
