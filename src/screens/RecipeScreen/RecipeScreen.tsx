import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './RecipeScreen.android.styles';
import { Recipe } from '../../types/Recipe';
import { RouteProp } from '@react-navigation/native';

interface RecipeScreenProps {
  recipe?: Recipe;
  route?: any;
}

export default function RecipeScreen({ route }: RecipeScreenProps) {
  console.log({ params: route.params });
  return (
    <SafeAreaView>
      <Text>RecipeScreeeen</Text>
    </SafeAreaView>
  );
}
