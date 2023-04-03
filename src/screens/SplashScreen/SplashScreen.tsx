import { Image, Text, View } from 'react-native';
import styles from './SplashScreen.android.styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
}
