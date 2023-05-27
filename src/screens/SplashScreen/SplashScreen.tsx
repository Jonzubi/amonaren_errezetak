import { View } from 'react-native';
import styles from './SplashScreen.android.styles';
import { useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import { CommonActions } from '@react-navigation/native';
import { getProfile } from '../../api/user/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/user/userSlice';

export default function SplashScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  useEffect(() => {
    performTimeConsumingTask().then(async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
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
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'Home',
              },
            ],
          }),
        );
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
