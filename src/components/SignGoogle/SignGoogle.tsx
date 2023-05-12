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
import { useNavigation } from '@react-navigation/native';
import { loginGoogle } from '../../api/user/user';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../redux/user/userSlice';

WebBrowser.maybeCompleteAuthSession();

export default function SignGoogle() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [token, setToken] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    webClientId: GOOGLE_WEB_CLIENT_ID,
    expoClientId: GOOGLE_EXPO_CLIENT_ID,
    iosClientId: GOOGLE_ANDROID_CLIENT_ID,
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
    const { access_token } = loginData.data;
    dispatch(setAccessToken(access_token));
    navigation.navigate('Home');
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
