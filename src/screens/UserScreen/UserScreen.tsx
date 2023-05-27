import { Text, View, TouchableOpacity } from 'react-native';
import styles from './UserScreen.android.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import LogOut from '../../components/LogOut/LogOut';
import { Divider } from '@rneui/base';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';

export default function UserScreen() {
  const navigation = useNavigation();
  const username = useSelector((state: RootState) => state.user.username);
  const nameSurname = useSelector((state: RootState) => state.user.nameSurname);

  const handleGoProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerUserAvatarContainer}
          onPress={handleGoProfile}
        >
          <UserAvatar size={40} />
          <View>
            <Text style={styles.nameSurnameText}>{nameSurname}</Text>
            <Text style={styles.usernameText}>{username}</Text>
          </View>
        </TouchableOpacity>
        <LogOut />
      </View>
      <Divider />
    </SafeAreaView>
  );
}
