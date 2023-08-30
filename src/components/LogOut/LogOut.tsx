import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-elements';
import styles from './Logout.android.styles';
import { useDispatch } from 'react-redux';
import { resetUserData } from '../../redux/user/userSlice';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

export default function LogOut() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePress = async () => {
    dispatch(resetUserData());
    await SecureStore.setItemAsync('access_token', '');
    router.push('login');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <AntDesign name="logout" />
      <Text>{t('logOut.logout')}</Text>
    </TouchableOpacity>
  );
}
