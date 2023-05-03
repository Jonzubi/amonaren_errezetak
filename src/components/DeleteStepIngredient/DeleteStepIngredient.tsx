import { TouchableOpacity } from 'react-native';
import styles from './DeleteStepIngredient.android.styles';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';

interface DeleteStepIngredientProps {
  onClick(): void;
}
export default function DeleteStepIngredient(props: DeleteStepIngredientProps) {
  const { onClick } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <MaterialIcons name="delete" color={colors.RED} size={40} />
    </TouchableOpacity>
  );
}
