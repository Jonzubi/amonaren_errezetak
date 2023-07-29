import { View, Text } from 'react-native';
import styles from './LoginScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button, Divider } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import SignGoogle from '../../components/SignGoogle/SignGoogle';
import { useRef, useState } from 'react';
import { isEmail } from '../../utils/functions/email';
import { login } from '../../api/user/user';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUserData } from '../../redux/user/userSlice';
import { AxiosError } from 'axios';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useErrorModal } from '../../hooks/useErrorModal';
import * as SecureStore from 'expo-secure-store';
import SubmitButton from '../../components/SubmitButton/SubmitButton';

interface LoginScreenProps {
  navigation?: any;
}
export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { modalText, setModalText, setShowModal, showModal } = useErrorModal(
    t('loginScreen.incorrectLogin'),
  );
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
    navigation.navigate('Auth_SignUp');
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const userData = await login({ email, password });
      const { access_token, username, nameSurname, imageUrl } = userData.data;
      dispatch(
        setUserData({
          access_token,
          username,
          nameSurname,
          imageUrl,
          email: userData.data.email,
        }),
      );
      await SecureStore.setItemAsync('access_token', access_token);
      setIsLoading(false);
      navigation.navigate('Main');
    } catch (error) {
      if ((error as AxiosError)?.response?.status === 401) {
        const modalText = (error as AxiosError)?.response?.data?.message;
        setModalText(
          t(
            modalText !== 'Unauthorized'
              ? modalText
              : 'loginScreen.incorrectLogin',
          ),
        );
      } else setModalText(t('errors.generic'));

      setShowModal(true);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Logo imageStyle={styles.logo} />

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
      <SubmitButton
        containerStyle={{ width: '100%' }}
        title={t('forms.login_button')}
        isLoading={isLoading}
        handlePress={handleLogin}
      />
      <Divider style={styles.divider} />
      {/* <SignGoogle /> */}
      <View style={styles.registerView}>
        <Text>{t('loginScreen.you_new')}</Text>
        <Text onPress={onSignUp} style={styles.registerText}>
          {t('loginScreen.go_register')}
        </Text>
      </View>
      <CustomToast
        closeModal={() => setShowModal(false)}
        visible={showModal}
        text={modalText}
      />
    </View>
  );
}
