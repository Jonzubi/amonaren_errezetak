import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_EXPO_CLIENT_ID,
  GOOGLE_WEB_CLIENT_ID,
} from '../../constants/constants';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { loginGoogle } from '../../api/user/user';
import * as SecureStore from 'expo-secure-store';
import { useUserStore } from 'src/zustand/userStore';

WebBrowser.maybeCompleteAuthSession();

export default function SignGoogle() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { setUserData } = useUserStore();

  const [token, setToken] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    expoClientId: GOOGLE_WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response?.authentication!.accessToken);
    }
  }, [response]);

  useEffect(() => {
    if (token === '') return;
    getUserInfo();
  }, [token]);

  const getUserInfo = async () => {
    const loginData = await loginGoogle({ token });
    const { access_token, email, username, imageUrl, nameSurname } =
      loginData.data;
    await SecureStore.setItemAsync('access_token', access_token);
    setUserData({
      access_token,
      email,
      nameSurname,
      username,
      imageUrl,
    });
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Main',
          },
        ],
      }),
    );
  };

  return (
    <Button
      buttonStyle={{
        backgroundColor: 'white',
      }}
      titleStyle={{
        color: 'black',
      }}
      containerStyle={{
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 40,
      }}
      disabled={!request}
      onPress={() => promptAsync()}
      icon={<AntDesign name={'google'} size={24} style={{ marginRight: 20 }} />}
      title={t('forms.google_sign')}
    />
  );
}
