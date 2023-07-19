import { View, Text, ActivityIndicator } from 'react-native';
import styles from './RegisterScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button, Divider } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import SignGoogle from '../../components/SignGoogle/SignGoogle';
import colors from '../../constants/colors';
import { useRef, useState } from 'react';
import { isEmail } from '../../utils/functions/email';
import { createUser } from '../../api/user/user';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useErrorModal } from '../../hooks/useErrorModal';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/user/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onGoLogin = () => {
    navigation.navigate('Auth_Login');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameSurname, setNameSurname] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { modalText, setModalText, setShowModal, showModal } = useErrorModal(
    t('errors.generic'),
  );

  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const confirmPasswordRef = useRef<any>(null);

  const validateForm = (): boolean => {
    let isValid = true;
    setErrorEmail('');
    setErrorPassword('');

    if (!isEmail(email)) {
      emailRef.current!.shake();
      setErrorEmail(t('registerScreen.not_email'));
      isValid = false;
    }
    if (password !== confirmPassword) {
      passwordRef.current!.shake();
      confirmPasswordRef.current!.shake();
      setErrorPassword(t('registerScreen.same_password'));
      isValid = false;
    }
    return isValid;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const data = await createUser({ email, password, nameSurname });
      const { access_token, username, imageUrl } = data.data;
      dispatch(
        setUserData({
          access_token,
          username,
          nameSurname: data.data.nameSurname,
          imageUrl,
          email: data.data.email,
        }),
      );
      AsyncStorage.setItem('access_token', access_token);
      setIsLoading(false);
      navigation.navigate('Main');
    } catch (error) {
      setShowModal(true);
    } finally {
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
        ref={passwordRef}
        errorMessage={errorPassword}
      />
      <Input
        placeholder={t('forms.enter_pass_again_placeholder')}
        secureTextEntry={true}
        leftIcon={
          <AntDesign name={'key'} size={24} style={{ marginRight: 5 }} />
        }
        onChangeText={(value) => setConfirmPassword(value)}
        ref={confirmPasswordRef}
        errorMessage={errorPassword}
      />
      <Input
        placeholder={t('forms.enter_nameSurname')}
        leftIcon={
          <AntDesign name={'user'} size={24} style={{ marginRight: 5 }} />
        }
        onChangeText={(value) => setNameSurname(value)}
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
          onPress={handleRegister}
          title={t('forms.signup_button')}
          color={colors.MAIN_GREEN}
          containerStyle={styles.button}
        />
      )}
      <Divider style={styles.divider} />
      {/* <SignGoogle /> */}
      <View style={styles.loginView}>
        <Text>{t('registerScreen.got_account')}</Text>
        <Text onPress={onGoLogin} style={styles.registerText}>
          {t('registerScreen.go_login')}
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
