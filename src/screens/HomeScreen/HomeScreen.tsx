import { useState, useEffect } from 'react';
import { FlatList, ListRenderItem, RefreshControl, View } from 'react-native';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';
import Recipe from '../../components/Recipe/Recipe';
import styles from './HomeScreen.android.styles';
import { Recipe as TRecipe } from '../../types/Recipe';
import { SafeAreaView } from 'react-native-safe-area-context';
import NoRecipes from '../../components/NoRecipes/NoRecipes';
import LogoAvatar from '../../components/LogoAvatar/LogoAvatar';
import { useTranslation } from 'react-i18next';
import { Input } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../constants/colors';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [filterText, setFilterText] = useState('');
  const { recipes, loading, refreshRecipes } = useRecipes(
    UseRecipesType.FILTER,
    undefined,
    filterText,
  );
  const { t } = useTranslation();

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

  useEffect(() => {
    let debounceTimeout: ReturnType<typeof setTimeout>;

    const handleFilterChange = (newFilterText: string) => {
      clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(() => {
        refreshRecipes(newFilterText);
      }, 500);
    };

    handleFilterChange(filterText);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [filterText]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {!loading && recipes.length === 0 ? (
        <NoRecipes />
      ) : (
        <>
          <View style={styles.filterContainer}>
            <Input
              leftIcon={<LogoAvatar />}
              rightIcon={
                <TouchableOpacity onPress={() => setFilterText('')}>
                  <Entypo name="cross" size={24} color={colors.BLACK} />
                </TouchableOpacity>
              }
              placeholder={t('homeScreen.filterRecipes')}
              value={filterText}
              onChangeText={setFilterText}
            />
          </View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={refreshRecipes}
              />
            }
            contentContainerStyle={{ flexGrow: 1 }}
            style={styles.flatList}
            data={recipes}
            renderItem={handleRenderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </SafeAreaView>
  );
}
