import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-elements';
import styles from './Logout.android.styles';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useUserStore } from 'src/zustand/userStore';

export default function LogOut() {
  const { t } = useTranslation();
  const { resetUserData } = useUserStore();
  const router = useRouter();

  const handlePress = async () => {
    resetUserData();
    await SecureStore.setItemAsync('access_token', '');
    router.replace('login');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <AntDesign name="logout" />
      <Text>{t('logOut.logout')}</Text>
    </TouchableOpacity>
  );
}
