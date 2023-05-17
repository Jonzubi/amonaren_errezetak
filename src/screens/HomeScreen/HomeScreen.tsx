import { FlatList, ListRenderItem } from 'react-native';
import { useRecipes } from '../../hooks/useRecipes';
import Recipe from '../../components/Recipe/Recipe';
import styles from './HomeScreen.android.styles';
import GoToAddRecipe from '../../components/GoToAddRecipe/GoToAddRecipe';
import { Recipe as TRecipe } from '../../types/Recipe';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { recipes, loading } = useRecipes();

  const handleRenderItem: ListRenderItem<TRecipe> = ({ item }) => (
    <Recipe title={item.title} description={item.description} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <FlatList
          style={styles.flatList}
          data={recipes}
          renderItem={handleRenderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <GoToAddRecipe />
    </SafeAreaView>
  );
}
