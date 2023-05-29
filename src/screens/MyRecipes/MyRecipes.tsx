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
export default function MyRecipes() {
  const { recipes, loading, refreshRecipes } = useRecipes(true);
  const [refreshing, setRefreshing] = useState(false);

  const handleRenderItem: ListRenderItem<TRecipe> = ({ item }) => <View></View>;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshRecipes} />
      }
    >
      <FlatList
        data={recipes}
        renderItem={handleRenderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
}
