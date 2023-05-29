import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { useRecipes } from '../../hooks/useRecipes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recipe as TRecipe } from '../../types/Recipe';
import { useState } from 'react';
import styles from './MyRecipes.android.styles';
import { Image } from 'react-native-elements';
import { getImageUrlWithName } from '../../utils/functions/image';
import { Card } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';

export default function MyRecipes() {
  const { recipes, loading, refreshRecipes } = useRecipes(true);
  const [refreshing, setRefreshing] = useState(false);

  const handleRenderItem: ListRenderItem<TRecipe> = ({ item }) => (
    <Card wrapperStyle={styles.myRecipeContainer}>
      <Image
        source={{ uri: getImageUrlWithName(item.image) }}
        style={styles.myRecipeImage}
      />
      <View style={styles.myRecipeInfoContainer}>
        <Text style={styles.myRecipeTitle}>{item.title}</Text>
        <View style={styles.myRecipeSubInfoContainer}>
          <View style={styles.myRecipesRatingContainer}>
            <View style={styles.myRecipesRatingSubContainer}>
              <AntDesign name="hearto" size={20} color={colors.RED} />
              <Text>25</Text>
            </View>
            <View style={styles.myRecipesRatingSubContainer}>
              <AntDesign name="staro" size={20} color={colors.BLACK} />
              <Text>10</Text>
            </View>
          </View>
          <Text style={styles.myRecipesDate}>Hace 5 días</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView>
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
