import { View, Text } from 'react-native';
import styles from './LoginScreen.android.styles';
import Logo from '../../components/Logo/Logo';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
    </View>
  );
}
