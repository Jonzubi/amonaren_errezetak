import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const { t } = useTranslation();
  return (
    <View>
      <Text h4>{t('addRecipeScreen.ingredients')}</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Ionicons name="add" size={20} />
          <Text style={{ fontWeight: '500', fontSize: 15, marginLeft: 10 }}>
            {t('addRecipeScreen.ingredient')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
