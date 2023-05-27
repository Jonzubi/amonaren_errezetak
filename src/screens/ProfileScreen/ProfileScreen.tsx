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
import { setUserData, setUserName } from '../../redux/user/userSlice';

export default function ProfileScreen() {
  const username = useSelector((state: RootState) => state.user.username);
  const nameSurname = useSelector((state: RootState) => state.user.nameSurname);
  const access_token = useSelector(
    (state: RootState) => state.user.access_token,
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [newUsername, setNewUsername] = useState(username || '');
  const [newNameSurname, setNewNameSurname] = useState(nameSurname || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (newUsername === '') return; // TODO handle error

    setIsLoading(true);
    try {
      await patchUsername(access_token, {
        username: newUsername,
        nameSurname: newNameSurname,
      });
      dispatch(
        setUserData({ username: newUsername, nameSurname: newNameSurname }),
      );
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userMainContainer}>
        <UserAvatar size={100} />
        <View>
          <Text style={styles.nameSurnameText}>{nameSurname}</Text>
          <Text style={styles.usernameText}>{username}</Text>
        </View>
      </View>
      <Divider style={{ marginVertical: 15 }} />
      <View style={{ flex: 1 }}>
        <Input
          value={newNameSurname}
          placeholder={t('forms.nameSurname_placeholder')}
          onChangeText={(value) => setNewNameSurname(value)}
        />
        <Input
          value={newUsername}
          placeholder={t('forms.username_placeholder')}
          onChangeText={(value) => setNewUsername(value)}
        />
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <SubmitButton
            title={t('forms.save')}
            isLoading={isLoading}
            handlePress={handleSave}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
