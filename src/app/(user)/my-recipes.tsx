import ListRecipes from '@screens/ListRecipes/ListRecipes';
import { UseRecipesType } from 'src/hooks/useRecipes';

export default function MyRecipes() {
  return <ListRecipes type={UseRecipesType.MINE} />;
}
