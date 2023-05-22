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
import GoToAddRecipe from '../../components/GoToAddRecipe/GoToAddRecipe';
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
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshRecipes} />
        }
      >
        <FlatList
          style={styles.flatList}
          data={recipes}
          renderItem={handleRenderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
