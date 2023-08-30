import RecipeScreen from '@screens/RecipeScreen/RecipeScreen';
import { useLocalSearchParams } from 'expo-router';

export default function Recipe() {
  const params = useLocalSearchParams();
  const { recipeId, editable } = params;
  return <RecipeScreen recipeId={recipeId as string} editable={editable} />;
}
