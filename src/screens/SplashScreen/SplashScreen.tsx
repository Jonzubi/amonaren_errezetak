import { View } from 'react-native';
import styles from './SplashScreen.android.styles';
import { useEffect } from 'react';
import Logo from '../../components/Logo/Logo';

export default function SplashScreen({ navigation }: { navigation: any }) {
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
      <Logo />
    </View>
  );
}
