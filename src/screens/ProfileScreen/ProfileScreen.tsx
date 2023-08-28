import { View, Image } from 'react-native';
import styles from './ProfileScreen.android.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Avatar, Divider, Text } from 'react-native-elements';
import { Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { patchUser } from '../../api/user/user';
import { ProfileData, setUserProfile } from '../../redux/user/userSlice';
import colors from '../../constants/colors';
import ChooseImageRefactor from '../../components/ChooseImageRefactor/ChooseImageRefactor';
import { PatchUser } from '../../interfaces/api/user/PatchUser';
import { isValidBase64 } from '../../utils/functions/image';

export default function ProfileScreen() {
  const username = useSelector((state: RootState) => state.user.username);
  const nameSurname = useSelector((state: RootState) => state.user.nameSurname);
  const email = useSelector((state: RootState) => state.user.email);
  const imageUrl = useSelector((state: RootState) => state.user.imageUrl);
  const access_token = useSelector(
    (state: RootState) => state.user.access_token,
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [newUsername, setNewUsername] = useState(username || '');
  const [newNameSurname, setNewNameSurname] = useState(nameSurname || '');
  const [newImage, setNewImage] = useState(imageUrl || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (newUsername === '') return; // TODO handle error

    setIsLoading(true);
    try {
      const patchUserData: PatchUser = {
        username: newUsername,
        nameSurname: newNameSurname,
      };
      const hasNewImage = newImage !== '' && isValidBase64(newImage);
      if (hasNewImage) patchUserData.newImage = newImage;

      const newUserData = await patchUser(access_token, patchUserData);
      const { username, nameSurname, imageUrl } = newUserData.data;
      const profileData: ProfileData = {
        nameSurname,
        username,
        imageUrl,
      };
      dispatch(setUserProfile(profileData));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userMainContainer}>
        <ChooseImageRefactor onImageChosen={(base64) => setNewImage(base64)}>
          <UserAvatar
            size={100}
            hardCodeUrl={newImage !== ''}
            hardCodedImageUrl={newImage}
          />
        </ChooseImageRefactor>
        <View>
          <Text style={styles.nameSurnameText}>{nameSurname}</Text>
          <Text style={styles.usernameText}>{username}</Text>
        </View>
      </View>
      <Divider style={{ marginVertical: 15 }} />
      <View style={{ flex: 1 }}>
        <Input
          value={email}
          editable={false}
          style={{ color: colors.LIGHTGREY }}
        />
        <Input
          value={newNameSurname}
          placeholder={t('forms.nameSurname_placeholder')}
          onChangeText={setNewNameSurname}
        />
        <Input
          value={newUsername}
          placeholder={t('forms.username_placeholder')}
          onChangeText={setNewUsername}
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
