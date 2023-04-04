import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_EXPO_CLIENT_ID,
  GOOGLE_WEB_CLIENT_ID,
} from '../../constants/constants';

WebBrowser.maybeCompleteAuthSession();
interface Props {
  onUserData: (user: any) => void;
}

export default function SignGoogle({ onUserData }: Props) {
  const { t } = useTranslation();

  const [token, setToken] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    webClientId: GOOGLE_WEB_CLIENT_ID,
    expoClientId: GOOGLE_EXPO_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const user = await response.json();
      console.log(user);
      onUserData(user);
    } catch (error) {
      // Add your own error handler here
    }
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
      onPress={promptAsync}
      icon={<AntDesign name={'google'} size={24} style={{ marginRight: 20 }} />}
      title={t('forms.google_sign')}
    />
  );
}
