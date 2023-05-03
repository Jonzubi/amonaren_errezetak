import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Input, Text } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import styles from './Ingredients.android.styles';
import colors from '../../constants/colors';
import AddStepIngredient from '../AddStepIngredient/AddStepIngredient';
import DeleteStepIngredient from '../DeleteStepIngredient/DeleteStepIngredient';

export interface ChooseImagesProps {
  onIngredientsChange?(ingredients: string[]): void;
}

export default function Ingredients(props: ChooseImagesProps) {
  const { onIngredientsChange } = props;
  const [ingredients, setIngredients] = useState(['']);
  const { t } = useTranslation();

  const onAddIngredient = () => {
    const newIngr = [...ingredients, ''];
    setIngredients(newIngr);
    if (onIngredientsChange) onIngredientsChange(newIngr);
  };

  const onDeleteIngredient = (index: number) => {
    const newIngr = ingredients.filter((ingr, i) => i !== index);
    setIngredients(newIngr);
    if (onIngredientsChange) onIngredientsChange(newIngr);
  };

  const renderInput = (ingredient: string, index: number) => (
    <View style={styles.ingredientContainer} key={`ingredient${index}`}>
      <View style={styles.inputContainer}>
        <Input
          placeholder={t('addRecipeScreen.add_ingredient_placeholder')}
          value={ingredient}
        />
      </View>
      <DeleteStepIngredient onClick={() => onDeleteIngredient(index)} />
    </View>
  );
  return (
    <View style={styles.container}>
      <Text h4>{t('addRecipeScreen.ingredients')}</Text>
      {ingredients.map((ingredient, index) => renderInput(ingredient, index))}
      <AddStepIngredient
        onClick={onAddIngredient}
        buttonText={t('addRecipeScreen.ingredient')}
      />
    </View>
  );
}
