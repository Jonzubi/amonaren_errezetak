import { View } from 'react-native';
import styles from './AddRecipeScreen.android.styles';
import { Text } from '@rneui/themed';

export default function AddRecipeScreen() {
  return (
    <View style={styles.container}>
      <Text h1>Añadir receta</Text>
    </View>
  );
}
