import { Image, View } from 'react-native';
import styles from './SplashScreen.android.styles';
import { useEffect } from 'react';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    performTimeConsumingTask().then(() => navigation.navigate('Login', {}));
  }, []);

  const performTimeConsumingTask = async () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );

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
