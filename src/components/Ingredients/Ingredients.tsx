import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native-elements';
export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  return (
    <View>
      <Text h4>Ingredientes</Text>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}
