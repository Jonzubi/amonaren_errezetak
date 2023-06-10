import { SafeAreaView, Text } from 'react-native';
import styles from './RecipeScreen.android.styles';
import { Recipe } from '../../types/Recipe';

interface RecipeScreenProps {
  recipe?: Recipe;
}

export default function RecipeScreen({ recipe }: RecipeScreenProps) {
  return (
    <SafeAreaView>
      <Text>RecipeScreeeen</Text>
    </SafeAreaView>
  );
}
