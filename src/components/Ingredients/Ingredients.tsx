import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Input, Text } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import styles from './Ingredients.android.styles';
import colors from '../../constants/colors';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState(['']);
  const { t } = useTranslation();

  const renderInput = (ingredient: string, index: number) => (
    <View style={styles.inputsView}>
      <Input
        placeholder={t('addRecipeScreen.add_ingredient_placeholder')}
        value={ingredient}
        containerStyle={{ width: '75%' }}
      />
      <TouchableOpacity
        onPress={() =>
          setIngredients(ingredients.filter((ingr, i) => i !== index))
        }
      >
        <MaterialIcons name="delete" color={colors.RED} size={40} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text h4>{t('addRecipeScreen.ingredients')}</Text>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {ingredients.map((ingredient, index) => renderInput(ingredient, index))}
        <TouchableOpacity
          onPress={() => setIngredients([...ingredients, ''])}
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
    </View>
  );
}
