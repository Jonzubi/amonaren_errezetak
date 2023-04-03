import { View, Text } from 'react-native';
import styles from './LoginScreen.android.styles';
import Logo from '../../components/Logo/Logo';
import { Input, Button, Divider } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import SignGoogle from '../../components/SignGoogle/SignGoogle';

export default function LoginScreen() {
  const { t } = useTranslation();

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
        color={'#00BB69'}
        containerStyle={{
          width: '100%',
          marginVertical: 40,
        }}
      />
      <Divider
        style={{
          alignSelf: 'stretch',
        }}
      />
      <SignGoogle />
    </View>
  );
}
