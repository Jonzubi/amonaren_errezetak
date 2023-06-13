import styles from './RecipeDetailsIngredient.android.styles';
import { Divider, Text } from 'react-native-elements';

interface RecipeDetailsIngredientProps {
  bottomDivider: boolean;
  ingredient: string;
}
export default function RecipeDetailsIngredient({
  bottomDivider,
  ingredient,
}: RecipeDetailsIngredientProps) {
  return (
    <>
      <Text>{ingredient}</Text>
      {bottomDivider && <Divider style={styles.subdivider} />}
    </>
  );
}
