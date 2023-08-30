import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './RecipeScreen.android.styles';
import { Recipe } from '../../types/Recipe';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';
import colors from '../../constants/colors';
import { RecipeDetails } from '../../components/RecipeDetails/RecipeDetails';
import { useLocalSearchParams } from 'expo-router';

interface RecipeScreenProps {
  recipeId: string;
  editable?: boolean;
}

export default function RecipeScreen({
  recipeId,
  editable,
}: RecipeScreenProps) {
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
        <RecipeDetails recipe={recipe} editable={editable} />
      )}
    </SafeAreaView>
  );
}
