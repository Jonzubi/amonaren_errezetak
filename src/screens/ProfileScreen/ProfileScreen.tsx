import { View } from 'react-native';
import styles from './ProfileScreen.android.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Divider, Text } from 'react-native-elements';
import { Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function ProfileScreen() {
  const username = useSelector((state: RootState) => state.user.username);
  const { t } = useTranslation();

  const [newUsername, setNewUsername] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userMainContainer}>
        <UserAvatar size={100} />
        <Text style={styles.usernameText}>{username}</Text>
      </View>
      <Divider style={{ marginVertical: 15 }} />
      <View>
        <Input
          placeholder={t('forms.username_placeholder')}
          onChangeText={(value) => setNewUsername(value)}
        />
      </View>
    </SafeAreaView>
  );
}
