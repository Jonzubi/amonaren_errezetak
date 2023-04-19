import { FlatList, View } from 'react-native';
import { Text } from 'react-native-elements';
import { useRecipes } from '../../hooks/useRecipes';
import Recipe from '../../components/Recipe/Recipe';
import styles from './HomeScreen.android.styles';

export default function HomeScreen() {
  const { recipes, loading } = useRecipes();

  const handleRenderItem = ({ item }) => (
    <Recipe title={item.title} description={item.description} />
  );

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={styles.container}>
      {!loading && (
        <FlatList
          style={styles.flatList}
          data={recipes}
          renderItem={handleRenderItem}
        />
      )}
    </View>
  );
}
