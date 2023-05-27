import { Text, View, TouchableOpacity } from 'react-native';
import styles from './UserScreen.android.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import LogOut from '../../components/LogOut/LogOut';
import { Divider } from '@rneui/base';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import colors from '../../constants/colors';

export default function UserScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();
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
      <Divider style={{ marginBottom: 15 }} />
      <ListItem bottomDivider>
        <MaterialCommunityIcons
          name="chef-hat"
          color={colors.BLACK}
          size={30}
        />
        <ListItem.Content>
          <ListItem.Title>{t('userScreen.myRecipes')}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem>
        <Ionicons name="star" color={colors.BLACK} size={30} />
        <ListItem.Content>
          <ListItem.Title>{t('userScreen.favRecipes')}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </SafeAreaView>
  );
}
