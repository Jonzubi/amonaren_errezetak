import { View } from 'react-native';
import styles from './SplashScreen.android.styles';
import { useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import { CommonActions } from '@react-navigation/native';
import { getProfile } from '../../api/user/user';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/user/userSlice';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    performTimeConsumingTask().then(async () => {
      try {
        const access_token = await SecureStore.getItemAsync('access_token');
        if (access_token === null) throw new Error();
        const data = await getProfile(access_token);

        const { email, username, imageUrl, nameSurname } = data.data;
        dispatch(
          setUserData({
            access_token,
            email,
            username,
            imageUrl,
            nameSurname,
          }),
        );
        router.push('main');
      } catch (error) {
        router.push('auth');
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
