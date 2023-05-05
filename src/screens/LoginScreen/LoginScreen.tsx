import { View, Text, ActivityIndicator } from 'react-native';
import styles from './LoginScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button, Divider } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import SignGoogle from '../../components/SignGoogle/SignGoogle';
import colors from '../../constants/colors';
import { useRef, useState } from 'react';
import { isEmail } from '../../utils/functions';
import { login } from '../../api/user/user';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../redux/user/userSlice';
import { AxiosError } from 'axios';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<any>(null);

  const validateForm = (): boolean => {
    let isValid = true;
    setErrorEmail('');

    if (!isEmail(email)) {
      emailRef?.current?.shake();
      setErrorEmail(t('registerScreen.not_email'));
      isValid = false;
    }
    return isValid;
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const tokenData = await login({ email, password });
      const { access_token } = tokenData.data;
      dispatch(setAccessToken(access_token));
      setIsLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      if ((error as AxiosError)?.response?.status === 401) {
      }
    }
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <Input
        placeholder={t('forms.enter_email_placeholder')}
        leftIcon={
          <AntDesign name={'mail'} size={24} style={{ marginRight: 5 }} />
        }
        onChangeText={(value) => setEmail(value)}
        errorMessage={errorEmail}
        ref={emailRef}
      />
      <Input
        placeholder={t('forms.enter_pass_placeholder')}
        secureTextEntry={true}
        leftIcon={
          <AntDesign name={'key'} size={24} style={{ marginRight: 5 }} />
        }
        onChangeText={(value) => setPassword(value)}
      />
      {isLoading && (
        <ActivityIndicator
          size={'large'}
          color={colors.MAIN_GREEN}
          style={styles.button}
        />
      )}
      {!isLoading && (
        <Button
          title={t('forms.login_button')}
          color={colors.MAIN_GREEN}
          containerStyle={styles.button}
          onPress={handleLogin}
        />
      )}
      <Divider style={styles.divider} />
      <SignGoogle />
      <View style={styles.registerView}>
        <Text>{t('loginScreen.you_new')}</Text>
        <Text onPress={onSignUp} style={styles.registerText}>
          {t('loginScreen.go_register')}
        </Text>
      </View>
    </View>
  );
}
