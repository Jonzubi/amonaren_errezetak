import { View, Image, Text } from 'react-native';
import styles from './RecipeDetails.android.styles';
import { getImageUrlWithName } from '../../utils/functions/image';
import { useTranslation } from 'react-i18next';

interface RecipeDetailsProps {
  recipe: any;
}
export function RecipeDetails({ recipe }: RecipeDetailsProps) {
  console.log({ recipe });
  return (
    <View style={styles.container}>
      <Image
        style={styles.recipeImage}
        source={{ uri: getImageUrlWithName(recipe.image) }}
      />
      <Text style={styles.title}>{recipe.title}</Text>
    </View>
  );
}
