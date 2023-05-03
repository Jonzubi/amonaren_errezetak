import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Input, Text } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import styles from './Ingredients.android.styles';
import colors from '../../constants/colors';

export interface ChooseImagesProps {
  onIngredientsChange?(ingredients: string[]): void;
}

export default function Ingredients(props: ChooseImagesProps) {
  const { onIngredientsChange } = props;
  const [ingredients, setIngredients] = useState(['']);
  const { t } = useTranslation();

  const renderInput = (ingredient: string, index: number) => (
    <View style={styles.inputsView} key={`ingredient${index}`}>
      <Input
        placeholder={t('addRecipeScreen.add_ingredient_placeholder')}
        value={ingredient}
        containerStyle={{ width: '75%' }}
      />
      <TouchableOpacity
        onPress={() => {
          const newIngr = ingredients.filter((ingr, i) => i !== index);
          setIngredients(newIngr);
          if (onIngredientsChange) onIngredientsChange(newIngr);
        }}
      >
        <MaterialIcons name="delete" color={colors.RED} size={40} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text h4>{t('addRecipeScreen.ingredients')}</Text>
      {ingredients.map((ingredient, index) => renderInput(ingredient, index))}
      <TouchableOpacity
        onPress={() => {
          const newIngr = [...ingredients, ''];
          setIngredients(newIngr);
          if (onIngredientsChange) onIngredientsChange(newIngr);
        }}
        style={{ flexDirection: 'row', justifyContent: 'center' }}
      >
        <Ionicons name="add" size={20} />
        <Text
          style={{
            fontWeight: '600',
            fontSize: 15,
            marginLeft: 10,
            marginBottom: 50,
          }}
        >
          {t('addRecipeScreen.ingredient')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
