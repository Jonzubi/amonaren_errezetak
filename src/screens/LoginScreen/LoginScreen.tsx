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

export default function LoginScreen({ navigation }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();

  const validateForm = (): boolean => {
    let isValid = true;
    setErrorEmail('');

    if (!isEmail(email)) {
      emailRef.current.shake();
      setErrorEmail(t('registerScreen.not_email'));
      isValid = false;
    }
    return isValid;
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleOnUserData = (userData) => {
    console.log(userData);
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    const tokenData = await login({ email, password }).catch((error) =>
      console.log(error),
    );
    setIsLoading(false);
    console.log(tokenData);
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
      <SignGoogle onUserData={handleOnUserData} />
      <View style={styles.registerView}>
        <Text>{t('loginScreen.you_new')}</Text>
        <Text onPress={onSignUp} style={styles.registerText}>
          {t('loginScreen.go_register')}
        </Text>
      </View>
    </View>
  );
}
