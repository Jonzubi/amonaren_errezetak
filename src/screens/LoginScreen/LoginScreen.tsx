import { View, Text } from 'react-native';
import styles from './LoginScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button, Divider } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import SignGoogle from '../../components/SignGoogle/SignGoogle';
import colors from '../../constants/colors';

export default function LoginScreen({ navigation }) {
  const { t } = useTranslation();

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <Input
        placeholder={t('forms.enter_email_placeholder')}
        leftIcon={
          <AntDesign name={'mail'} size={24} style={{ marginRight: 5 }} />
        }
      />
      <Input
        placeholder={t('forms.enter_pass_placeholder')}
        secureTextEntry={true}
        leftIcon={
          <AntDesign name={'key'} size={24} style={{ marginRight: 5 }} />
        }
      />
      <Button
        title={t('forms.login_button')}
        color={colors.MAIN_GREEN}
        containerStyle={styles.button}
      />
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
