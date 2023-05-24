import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-elements';
import styles from './Logout.android.styles';

export default function LogOut() {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={styles.container}>
      <AntDesign name="logout" />
      <Text>{t('logOut.logout')}</Text>
    </TouchableOpacity>
  );
}
