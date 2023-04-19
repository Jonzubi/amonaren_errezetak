import { SpeedDial } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './GoToAddRecipe.android.styles';
import colors from '../../constants/colors';

export default function GoToAddRecipe() {
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign style={{ color: colors.WHITE }} name={'plus'} size={35} />
    </TouchableOpacity>
  );
}
