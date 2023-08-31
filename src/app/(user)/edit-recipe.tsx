import AddRecipeScreen from '@screens/AddRecipeScreen/AddRecipeScreen';
import { useLocalSearchParams } from 'expo-router';

export default function EditRecipe() {
  const { recipeId } = useLocalSearchParams();
  return <AddRecipeScreen recipeId={recipeId!} />;
}
