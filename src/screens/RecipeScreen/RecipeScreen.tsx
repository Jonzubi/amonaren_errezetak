import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './RecipeScreen.android.styles';
import { Recipe } from '../../types/Recipe';
import { RouteProp } from '@react-navigation/native';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';

interface RecipeScreenProps {
  recipe?: Recipe;
  route?: any;
}

export default function RecipeScreen({ route }: RecipeScreenProps) {
  const { recipeId } = route.params;
  const { recipes, loading, refreshRecipes } = useRecipes(
    UseRecipesType.BYID,
    recipeId,
  );
  const recipe = recipes[0];
  return (
    <SafeAreaView>
      <Text>RecipeScreeeen</Text>
    </SafeAreaView>
  );
}
