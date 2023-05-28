import { View } from 'react-native';
import { Card, Text } from '@rneui/themed';
import styles from './Recipe.android.styles';
import { API_URL } from '../../constants/constants';
import UserAvatar from '../UserAvatar/UserAvatar';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';

interface Props {
  title: string;
  description: string;
  image?: string;
  createdBy: createdByProp;
}

interface createdByProp {
  username: string;
  imageUrl?: string;
}

export default function Recipe({ title, image, createdBy }: Props) {
  return (
    <Card containerStyle={styles.container}>
      <Card.Title>
        <Text h4>{title}</Text>
      </Card.Title>
      <Card.Image source={{ uri: `${API_URL}/images/${image}` }} />
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterUser}>
          <UserAvatar hardCodedImageUrl={createdBy?.imageUrl} hardCodeUrl />
          <Text style={styles.cardFooterUsernameText}>
            {createdBy?.username}
          </Text>
        </View>
        <View style={styles.cardFooterRating}>
          <View style={styles.cardFooterRate}>
            <AntDesign name="hearto" size={20} color={colors.RED} />
            <Text>25</Text>
          </View>
          <View style={styles.cardFooterRate}>
            <AntDesign name="staro" size={20} color={colors.BLACK} />
            <Text>10</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}
