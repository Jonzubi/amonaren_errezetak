import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import styles from './AddStepIngredient.android.styles';

interface AddStepIngredientProps {
  onClick(): void;
  buttonText: string;
}
export default function AddStepIngredient(props: AddStepIngredientProps) {
  const { onClick, buttonText } = props;
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <Ionicons name="add" size={20} />
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
