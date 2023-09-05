import { View, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import styles from './ListRecipes.android.styles';
import { Image } from 'react-native-elements';
import { getImageUrlWithName } from '../../utils/functions/image';
import { Card } from '@rneui/themed';
import { getFromNowFromDate } from '../../utils/functions/date';
import RateRecipeIcon from '../../components/RateRecipeIcon/RateRecipeIcon';
import { useRouter } from 'expo-router';
import NoRecipes from '../../components/NoRecipes/NoRecipes';
import { FlashList } from '@shopify/flash-list';
import { Recipe } from 'src/types/Recipe';

interface ListRecipesProps {
  type: UseRecipesType;
}
export default function ListRecipes({ type }: ListRecipesProps) {
  const { recipes, loading, refreshRecipes } = useRecipes(type);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  const handleRenderItem = ({ item }: { item: Recipe }) => (
    <Card wrapperStyle={styles.myRecipeContainer}>
      <Image
        source={{ uri: getImageUrlWithName(item.image) }}
        style={styles.myRecipeImage}
      />
      <TouchableOpacity
        style={styles.myRecipeInfoContainer}
        onPress={() => {
          router.push({
            pathname: `/recipe/${item.recipeId}`,
            params: { editable: type === UseRecipesType.MINE },
          });
        }}
      >
        <Text style={styles.myRecipeTitle}>{item.title}</Text>
        <View style={styles.myRecipeSubInfoContainer}>
          <View style={styles.myRecipesRatingContainer}>
            <RateRecipeIcon
              recipeId={item.recipeId!}
              containerStyle={styles.myRecipesRatingSubContainer}
              isRated={item.hasLiked!}
              rateCount={item.likeCount}
              type="Like"
            />
            <RateRecipeIcon
              recipeId={item.recipeId!}
              containerStyle={styles.myRecipesRatingSubContainer}
              isRated={item.hasFaved!}
              rateCount={item.favCount}
              type="Fav"
            />
          </View>
          <Text style={styles.myRecipesDate}>
            {getFromNowFromDate(item.creationDate!)}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      {!loading && recipes.length === 0 ? (
        <NoRecipes />
      ) : (
        <FlashList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshRecipes}
            />
          }
          data={recipes}
          renderItem={handleRenderItem}
          keyExtractor={(item, index) => item.recipeId!}
          estimatedItemSize={300}
        />
      )}
    </SafeAreaView>
  );
}
