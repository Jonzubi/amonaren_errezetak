import { View, Text } from 'react-native';
import styles from './RegisterScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button, Divider } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import SignGoogle from '../../components/SignGoogle/SignGoogle';
import colors from '../../constants/colors';

export default function RegisterScreen({ navigation }) {
  const { t } = useTranslation();
  const onGoLogin = () => {
    navigation.navigate('Login');
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
      <Input
        placeholder={t('forms.enter_pass_again_placeholder')}
        secureTextEntry={true}
        leftIcon={
          <AntDesign name={'key'} size={24} style={{ marginRight: 5 }} />
        }
      />
      <Button
        title={t('forms.signup_button')}
        color={colors.MAIN_GREEN}
        containerStyle={styles.button}
      />
      <Divider style={styles.divider} />
      <SignGoogle />
      <View style={styles.registerView}>
        <Text>{t('registerScreen.got_account')}</Text>
        <Text onPress={onGoLogin} style={styles.registerText}>
          {t('registerScreen.go_login')}
        </Text>
      </View>
    </View>
  );
}
