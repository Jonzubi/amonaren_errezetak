import { useState, useCallback } from 'react';
import {
  FlatList,
  ListRenderItem,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useRecipes } from '../../hooks/useRecipes';
import Recipe from '../../components/Recipe/Recipe';
import styles from './HomeScreen.android.styles';
import { Recipe as TRecipe } from '../../types/Recipe';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { recipes, loading, refreshRecipes } = useRecipes();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleRenderItem: ListRenderItem<TRecipe> = ({ item }) => (
    <Recipe
      recipeId={item.recipeId}
      title={item.title}
      description={item.description}
      image={item.image}
      createdBy={item.createdBy}
      likeCount={item.likeCount}
      favCount={item.favCount}
      hasLiked={item.hasLiked}
      hasFaved={item.hasFaved}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshRecipes} />
        }
        style={styles.flatList}
        data={recipes}
        renderItem={handleRenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
