import ListRecipes from '@screens/ListRecipes/ListRecipes';
import { UseRecipesType } from 'src/hooks/useRecipes';

export default function FavRecipes() {
  return <ListRecipes type={UseRecipesType.FAVS} />;
}
