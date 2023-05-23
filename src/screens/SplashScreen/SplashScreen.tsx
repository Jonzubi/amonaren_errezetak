import { View } from 'react-native';
import styles from './SplashScreen.android.styles';
import { useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import { CommonActions } from '@react-navigation/native';
import { getProfile } from '../../api/user/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    performTimeConsumingTask().then(async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        const data = await getProfile(accessToken || '');
        console.log(data);
      } catch (error) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'Auth',
              },
            ],
          }),
        );
      }
    });
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
