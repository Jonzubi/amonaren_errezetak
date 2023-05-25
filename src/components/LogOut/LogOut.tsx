import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-elements';
import styles from './Logout.android.styles';
import { useDispatch } from 'react-redux';
import { resetUserData } from '../../redux/user/userSlice';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogOut() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = () => {
    dispatch(resetUserData());
    AsyncStorage.setItem('access_token', '');
    navigation.navigate('Auth');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <AntDesign name="logout" />
      <Text>{t('logOut.logout')}</Text>
    </TouchableOpacity>
  );
}
