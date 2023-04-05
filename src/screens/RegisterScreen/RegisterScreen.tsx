import { View, Text, ActivityIndicator } from 'react-native';
import styles from './RegisterScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button, Divider } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import SignGoogle from '../../components/SignGoogle/SignGoogle';
import colors from '../../constants/colors';
import { useRef, useState } from 'react';
import { isEmail } from '../../utils/functions';
import { createUser } from '../../api/user/user';

export default function RegisterScreen({ navigation }) {
  const { t } = useTranslation();
  const onGoLogin = () => {
    navigation.navigate('Login');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const validateForm = (): boolean => {
    let isValid = true;
    setErrorEmail('');
    setErrorPassword('');

    if (!isEmail(email)) {
      emailRef.current.shake();
      setErrorEmail(t('registerScreen.not_email'));
      isValid = false;
    }
    if (password !== confirmPassword) {
      passwordRef.current.shake();
      confirmPasswordRef.current.shake();
      setErrorPassword(t('registerScreen.same_password'));
      isValid = false;
    }
    return isValid;
  };
  const handleRegister = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    const data = await createUser({ email, password }).catch((error) =>
      console.log(error),
    );
    setIsLoading(false);
  };

  const handleOnUserData = (userData) => {
    console.log(userData);
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
      <SignGoogle onUserData={handleOnUserData} />
      <View style={styles.registerView}>
        <Text>{t('registerScreen.got_account')}</Text>
        <Text onPress={onGoLogin} style={styles.registerText}>
          {t('registerScreen.go_login')}
        </Text>
      </View>
    </View>
  );
}
