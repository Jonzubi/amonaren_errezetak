import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recipe as TRecipe } from '../../types/Recipe';
import { useState } from 'react';
import styles from './ListRecipes.android.styles';
import { Image } from 'react-native-elements';
import { getImageUrlWithName } from '../../utils/functions/image';
import { Card } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { getFromNowFromDate } from '../../utils/functions/date';
import RateRecipeIcon from '../../components/RateRecipeIcon/RateRecipeIcon';
import { useNavigation } from '@react-navigation/native';

interface ListRecipesProps {
  type: UseRecipesType;
}
export default function ListRecipes({ type }: ListRecipesProps) {
  const { recipes, loading, refreshRecipes } = useRecipes(type);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const handleRenderItem: ListRenderItem<TRecipe> = ({ item }) => (
    <Card wrapperStyle={styles.myRecipeContainer}>
      <Image
        source={{ uri: getImageUrlWithName(item.image) }}
        style={styles.myRecipeImage}
      />
      <TouchableOpacity
        style={styles.myRecipeInfoContainer}
        onPress={() =>
          navigation.navigate('Recipe', {
            recipeId: item.recipeId,
            editable: true,
          })
        }
      >
        <Text style={styles.myRecipeTitle}>{item.title}</Text>
        <View style={styles.myRecipeSubInfoContainer}>
          <View style={styles.myRecipesRatingContainer}>
            <RateRecipeIcon
              recipeId={item.recipeId}
              containerStyle={styles.myRecipesRatingSubContainer}
              isRated={item.hasLiked}
              rateCount={item.likeCount}
              type="Like"
            />
            <RateRecipeIcon
              recipeId={item.recipeId}
              containerStyle={styles.myRecipesRatingSubContainer}
              isRated={item.hasFaved}
              rateCount={item.favCount}
              type="Fav"
            />
          </View>
          <Text style={styles.myRecipesDate}>
            {getFromNowFromDate(item.creationDate)}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshRecipes} />
        }
        data={recipes}
        renderItem={handleRenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
