import { View } from 'react-native';
import styles from './ProfileScreen.android.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Divider, Text } from 'react-native-elements';
import { Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { patchUsername } from '../../api/user/user';
import { setUserName } from '../../redux/user/userSlice';

export default function ProfileScreen() {
  const username = useSelector((state: RootState) => state.user.username);
  const access_token = useSelector(
    (state: RootState) => state.user.access_token,
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [newUsername, setNewUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (newUsername === '') return; // TODO handle error

    setIsLoading(true);
    await patchUsername(access_token, newUsername).catch(() => {
      // TODO handle error
    });
    dispatch(setUserName(newUsername));
    setIsLoading(false);
  };
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
        <SubmitButton
          title={t('forms.save')}
          isLoading={isLoading}
          handlePress={handleSave}
        />
      </View>
    </SafeAreaView>
  );
}
