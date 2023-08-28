import { useState } from 'react';
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

export default function HomeScreen() {
  const { recipes, loading, refreshRecipes } = useRecipes(UseRecipesType.ALL);
  const [refreshing, setRefreshing] = useState(false);
  const [filterText, setFilterText] = useState('');
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

  return (
    <SafeAreaView style={styles.safeArea}>
      {!loading && recipes.length === 0 ? (
        <NoRecipes />
      ) : (
        <>
          <View
            style={{
              marginHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Input
              leftIcon={<LogoAvatar />}
              placeholder={t('homeScreen.filterRecipes')}
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
