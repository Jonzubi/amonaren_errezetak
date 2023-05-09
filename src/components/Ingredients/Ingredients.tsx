import { View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './Ingredients.android.styles';
import AddStepIngredient from '../AddStepIngredient/AddStepIngredient';
import DeleteStepIngredient from '../DeleteStepIngredient/DeleteStepIngredient';

interface IngredientsProps {
  ingredients: string[];
  addIngredient(): void;
  deleteIngredient(index: number): void;
  editIngredient(index: number, newValue: string): void;
}

export default function Ingredients({
  ingredients,
  addIngredient,
  deleteIngredient,
  editIngredient,
}: IngredientsProps) {
  const { t } = useTranslation();

  const renderInput = (ingredient: string, index: number) => (
    <View style={styles.ingredientContainer} key={`ingredient${index}`}>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={(newValue) => editIngredient(index, newValue)}
          placeholder={t('addRecipeScreen.add_ingredient_placeholder')}
          value={ingredient}
        />
      </View>
      <DeleteStepIngredient onClick={() => deleteIngredient(index)} />
    </View>
  );
  return (
    <View style={styles.container}>
      <Text h4>{t('addRecipeScreen.ingredients')}</Text>
      {ingredients.map((ingredient, index) => renderInput(ingredient, index))}
      <AddStepIngredient
        onClick={addIngredient}
        buttonText={t('addRecipeScreen.ingredient')}
      />
    </View>
  );
}
