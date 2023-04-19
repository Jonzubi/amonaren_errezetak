import { SpeedDial } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './GoToAddRecipe.android.styles';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function GoToAddRecipe() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('AddRecipe')}
    >
      <AntDesign style={{ color: colors.WHITE }} name={'plus'} size={35} />
    </TouchableOpacity>
  );
}
