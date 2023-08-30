import AddRecipeScreen from '@screens/AddRecipeScreen/AddRecipeScreen';
import { useLocalSearchParams } from 'expo-router';
export default function RecipeDetailsScreen() {
  const { recipeId } = useLocalSearchParams<{ recipeId: string }>();
  return <AddRecipeScreen recipeId={recipeId} />;
}
