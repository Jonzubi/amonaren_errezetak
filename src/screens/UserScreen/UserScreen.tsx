import { Text, View, TouchableOpacity } from 'react-native';
import styles from './UserScreen.android.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import LogOut from '../../components/LogOut/LogOut';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ListItem } from '@rneui/themed';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';

export default function UserScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const username = useSelector((state: RootState) => state.user.username);
  const nameSurname = useSelector((state: RootState) => state.user.nameSurname);

  const handleGoProfile = () => {
    router.push('profile');
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
      <ListItem bottomDivider onPress={() => router.push('my-recipes')}>
        <MaterialCommunityIcons name="chef-hat" size={30} />
        <ListItem.Content>
          <ListItem.Title>{t('userScreen.myRecipes')}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider onPress={() => router.push('fav-recipes')}>
        <AntDesign name="star" size={30} />
        <ListItem.Content>
          <ListItem.Title>{t('userScreen.favRecipes')}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </SafeAreaView>
  );
}
