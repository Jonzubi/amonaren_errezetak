import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import styles from './Recipe.android.styles';
import UserAvatar from '../UserAvatar/UserAvatar';
import { getImageUrlWithName } from '../../utils/functions/image';
import RateRecipeIcon from '../RateRecipeIcon/RateRecipeIcon';
import { Link } from 'expo-router';
import moment from 'moment';

interface Props {
  recipeId: string;
  title: string;
  description: string;
  image?: string;
  createdBy: createdByProp;
  creationDate: string;
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
  recipeId,
  title,
  image,
  createdBy,
  creationDate,
  likeCount,
  favCount,
  hasLiked,
  hasFaved,
}: Props) {
  return (
    <View style={styles.container}>
      <Link href={`recipe/${recipeId}`} asChild>
        <TouchableOpacity style={styles.clickableContainer}>
          <ImageBackground
            source={{
              uri: getImageUrlWithName(image),
            }}
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.fromNow}>
              <Text style={styles.fromNowText}>
                {moment(creationDate).fromNow()}
              </Text>
            </View>
            <View style={styles.footerContainer}>
              <View style={styles.footerUser}>
                <UserAvatar
                  hardCodedImageUrl={createdBy?.imageUrl}
                  hardCodeUrl
                />
                <Text style={styles.usernameText}>{createdBy?.username}</Text>
              </View>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </Link>
      <View style={styles.footerRating}>
        <View style={styles.footerRating}>
          <RateRecipeIcon
            recipeId={recipeId}
            containerStyle={styles.footerRate}
            isRated={hasLiked}
            rateCount={likeCount}
            type="Like"
          />
          <RateRecipeIcon
            recipeId={recipeId}
            containerStyle={styles.footerRate}
            isRated={hasFaved}
            rateCount={favCount}
            type="Fav"
          />
        </View>
      </View>
    </View>
  );
}
