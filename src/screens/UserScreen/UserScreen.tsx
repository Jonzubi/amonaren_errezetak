import { Text, View } from 'react-native';
import styles from './UserScreen.android.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import LogOut from '../../components/LogOut/LogOut';
import { Divider } from '@rneui/base';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function UserScreen() {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.headerUserAvatarContainer}>
          <UserAvatar size={40} />
          <Text style={styles.usernameText}>{username}</Text>
        </View>
        <LogOut />
      </View>
      <Divider />
    </SafeAreaView>
  );
}
