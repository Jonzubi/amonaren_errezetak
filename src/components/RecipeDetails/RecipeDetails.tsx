import { ScrollView, Image, View, TouchableOpacity } from 'react-native';
import styles from './RecipeDetails.android.styles';
import { getImageUrlWithName } from '../../utils/functions/image';
import { Divider, Text } from 'react-native-elements';
import UserAvatar from '../UserAvatar/UserAvatar';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';

interface RecipeDetailsProps {
  recipe: any;
}
export function RecipeDetails({ recipe }: RecipeDetailsProps) {
  console.log({ recipe });
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.recipeImage}
        source={{ uri: getImageUrlWithName(recipe.image) }}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.detailUserContainer}>
          <UserAvatar
            size={50}
            hardCodeUrl
            hardCodedImageUrl={recipe.createdBy.imageUrl}
          />
          <View style={styles.detailUserNameContainer}>
            <Text>{recipe.createdBy.nameSurname}</Text>
            <Text style={styles.detailUserNameText}>
              {recipe.createdBy.username}
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{recipe.description}</Text>
        <TouchableOpacity style={styles.favouriteButton}>
          <AntDesign name="star" size={20} />
          <Text style={styles.favouriteText}>
            {t('recipeDetail.saveFavourite')}
          </Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <Text style={styles.subtitle}>{t('addRecipeScreen.ingredients')}</Text>
        {recipe.ingredients.map((ingr: string, i: number) => (
          <>
            <Text>{ingr}</Text>
            {i < recipe.ingredients.length - 1 && (
              <Divider style={styles.subdivider} />
            )}
          </>
        ))}
      </View>
    </ScrollView>
  );
}
