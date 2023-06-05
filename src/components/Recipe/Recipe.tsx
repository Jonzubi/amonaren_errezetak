import { View } from 'react-native';
import { Card, Text } from '@rneui/themed';
import styles from './Recipe.android.styles';
import { API_URL } from '../../constants/constants';
import UserAvatar from '../UserAvatar/UserAvatar';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { getImageUrlWithName } from '../../utils/functions/image';
import RateRecipeIcon from '../RateRecipeIcon/RateRecipeIcon';

interface Props {
  title: string;
  description: string;
  image?: string;
  createdBy: createdByProp;
  likeCount: number;
  favCount: number;
  hasLiked: boolean;
  hasFaved: boolean;
}

interface createdByProp {
  username: string;
  imageUrl?: string;
}

export default function Recipe({
  title,
  image,
  createdBy,
  likeCount,
  favCount,
  hasLiked,
  hasFaved,
}: Props) {
  return (
    <Card containerStyle={styles.container}>
      <Card.Title>
        <Text h4>{title}</Text>
      </Card.Title>
      <Card.Image source={{ uri: getImageUrlWithName(image) }} />
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterUser}>
          <UserAvatar hardCodedImageUrl={createdBy?.imageUrl} hardCodeUrl />
          <Text style={styles.cardFooterUsernameText}>
            {createdBy?.username}
          </Text>
        </View>
        <View style={styles.cardFooterRating}>
          <RateRecipeIcon
            containerStyle={styles.cardFooterRate}
            isRated={hasLiked}
            rateCount={likeCount}
            type="Like"
          />
          <RateRecipeIcon
            containerStyle={styles.cardFooterRate}
            isRated={hasFaved}
            rateCount={favCount}
            type="Fav"
          />
        </View>
      </View>
    </Card>
  );
}
