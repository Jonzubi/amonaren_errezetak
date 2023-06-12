import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './RecipeScreen.android.styles';
import { Recipe } from '../../types/Recipe';
import { RouteProp } from '@react-navigation/native';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';
import { getImageUrlWithName } from '../../utils/functions/image';
import colors from '../../constants/colors';
import { RecipeDetails } from '../../components/RecipeDetails/RecipeDetails';

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
    <SafeAreaView style={loading && styles.center}>
      {loading ? (
        <ActivityIndicator size={'large'} color={colors.MAIN_GREEN} />
      ) : (
        <RecipeDetails recipe={recipe} />
      )}
    </SafeAreaView>
  );
}
