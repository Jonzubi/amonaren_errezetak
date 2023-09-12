import { ScrollView, Image, View, TouchableOpacity } from 'react-native';
import styles from './RecipeDetails.android.styles';
import { getImageUrlWithName } from '../../utils/functions/image';
import { Divider, Text } from 'react-native-elements';
import UserAvatar from '../UserAvatar/UserAvatar';
import { useTranslation } from 'react-i18next';
import RecipeDetailsStep from '../RecipeDetailsStep/RecipeDetailsStep';
import RecipeDetailsIngredient from '../RecipeDetailsIngredient/RecipeDetailsIngredient';
import { getFromNowFromDate } from '../../utils/functions/date';
import RateRecipeIcon from '../RateRecipeIcon/RateRecipeIcon';
import { EditRecipeHeader } from '../EditRecipeHeader/EditRecipeHeader';

interface RecipeDetailsProps {
  recipe: any;
  editable?: boolean;
}
export function RecipeDetails({ recipe, editable }: RecipeDetailsProps) {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      {editable && <EditRecipeHeader recipeId={recipe.recipeId} />}
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
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <RateRecipeIcon
            type="Like"
            isRated={recipe.hasLiked}
            hideText
            containerStyle={styles.rateButton}
            recipeId={recipe.recipeId}
          />
          <RateRecipeIcon
            type="Fav"
            isRated={recipe.hasFaved}
            hideText
            containerStyle={styles.rateButton}
            recipeId={recipe.recipeId}
          />
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.subtitle}>{t('addRecipeScreen.ingredients')}</Text>
        {recipe.ingredients.map((ingr: string, i: number) => (
          <RecipeDetailsIngredient
            bottomDivider={i < recipe.ingredients.length - 1}
            ingredient={ingr}
          />
        ))}
        <Divider style={styles.divider} />
        <Text style={styles.subtitle}>{t('addRecipeScreen.steps')}</Text>
        {recipe.steps.map((step: any, index: number) => (
          <RecipeDetailsStep
            stepDescription={step.description}
            stepNumber={index + 1}
            stepImage={step.image}
          />
        ))}
        <Divider style={styles.divider} />
        <View style={styles.userBottomContaine}>
          <UserAvatar
            size={100}
            hardCodeUrl
            hardCodedImageUrl={recipe.createdBy.imageUrl}
          />
          <Text style={styles.detailUserNameText}>
            {`${t('recipeDetail.author')}:`}
          </Text>
          <Text style={styles.authorText}>
            <Text>{recipe.createdBy.nameSurname}</Text>
          </Text>
          <Text style={styles.detailUserNameText}>
            {getFromNowFromDate(recipe.creationDate)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
