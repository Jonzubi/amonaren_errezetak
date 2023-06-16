import { ScrollView } from 'react-native';
import { createRef, useEffect } from 'react';
import styles from './AddRecipeScreen.android.styles';
import { Input, Button } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import ChooseImages from '../../components/ChooseImages/ChooseImages';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImagePickerAsset } from 'expo-image-picker';
import { Divider, Text } from 'react-native-elements';
import Ingredients from '../../components/Ingredients/Ingredients';
import Steps from '../../components/Steps/Steps';
import colors from '../../constants/colors';
import { createRecipe, editRecipe } from '../../api/recipe/recipe';
import { useIngredients } from '../../hooks/useIngredients';
import { useSteps } from '../../hooks/useSteps';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useErrorModal } from '../../hooks/useErrorModal';
import { useNavigation } from '@react-navigation/native';
import { getHeaderWithAccessToken } from '../../utils/functions/axiosOptions';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';
import { getImageUrlWithName } from '../../utils/functions/image';

interface AddRecipeScreenProps {
  route?: any;
}

export default function AddRecipeScreen({ route }: AddRecipeScreenProps) {
  const recipeId = route?.params?.recipeId;
  const token = useSelector((state: RootState) => state.user.access_token);
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [description, setDescription] = useState('');
  const { modalText, setModalText, setShowModal, showModal } = useErrorModal(
    t('errors.generic'),
  );
  const [recipeImage, setRecipeImage] = useState<string>();
  const [editRecipeImage, setEditRecipeImage] = useState<string>();
  const [postingRecipe, setPostingRecipe] = useState(false);
  let scrollRef = createRef<ScrollView>();
  const titleRef = useRef<any>(null);
  const {
    ingredients,
    addIngredient,
    deleteIngredient,
    editIngredient,
    setIngredients,
  } = useIngredients();
  const { steps, addStep, editStep, deleteStep, setSteps } = useSteps();
  const { recipes, loading, refreshRecipes } = useRecipes(
    UseRecipesType.BYID,
    recipeId,
  );

  useEffect(() => {
    if (!recipes) return;
    if (recipes?.length === 0) return;
    const recipe = recipes[0];
    console.log({ recipe });
    setEditRecipeImage(recipe.image);
    setTitle(recipe.title);
    setDescription(recipe.description);
    setIngredients(recipe.ingredients);
    setSteps(recipe.steps);
  }, [recipes]);

  const onImageChosen = async (base64: string) => {
    setRecipeImage(base64);
  };

  const validateForm = (): boolean => {
    let isValid = true;
    if (title.length === 0) {
      titleRef?.current?.shake();
      setErrorTitle(t('addRecipeScreen.errorTitle'));
      isValid = false;
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
    return isValid;
  };

  const postRecipe = async () => {
    setPostingRecipe(true);
    if (!validateForm()) {
      setPostingRecipe(false);
      return;
    }
    try {
      const postFunction = !recipeId ? createRecipe : editRecipe;
      await postFunction(
        {
          title,
          description,
          image: recipeImage,
          ingredients,
          steps,
        },
        getHeaderWithAccessToken(token),
      );
      navigation.navigate('Home');
    } catch (error) {
      setModalText(t('errors.generic'));
      setShowModal(true);
    } finally {
      setPostingRecipe(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} style={styles.container}>
        <ChooseImages
          initialImageUrl={getImageUrlWithName(editRecipeImage)}
          containerStyle={styles.addImage}
          containerStyleWithImage={styles.addImageWithImage}
          onImageChosen={onImageChosen}
        />
        <Divider style={styles.verticalDivider} />
        <Text h4 style={{ marginBottom: 25 }}>
          {t('addRecipeScreen.title')}
        </Text>
        <Input
          errorMessage={errorTitle}
          style={styles.titleInput}
          placeholder={t('addRecipeScreen.inputTitle')}
          onChangeText={(value) => setTitle(value)}
          value={title}
          ref={titleRef}
        />
        <Divider style={styles.verticalDivider} />
        <Text h4 style={{ marginBottom: 25 }}>
          {t('addRecipeScreen.description')}
        </Text>
        <Input
          placeholder={t('addRecipeScreen.inputDescription')}
          onChangeText={(value) => setDescription(value)}
          value={description}
          multiline
          inputStyle={{
            height: 150,
          }}
        />
        <Divider style={styles.verticalDivider} />
        <Ingredients
          ingredients={ingredients}
          addIngredient={addIngredient}
          deleteIngredient={deleteIngredient}
          editIngredient={editIngredient}
        />
        <Divider style={styles.verticalDivider} />
        <Steps
          steps={steps}
          addStep={addStep}
          editStep={editStep}
          deleteStep={deleteStep}
        />
        <Button
          title={
            !recipeId
              ? t('addRecipeScreen.postRecipe')
              : t('addRecipeScreen.editRecipe')
          }
          color={colors.MAIN_GREEN}
          buttonStyle={styles.postButton}
          onPress={postRecipe}
          loading={postingRecipe}
        />
        <CustomToast
          closeModal={() => setShowModal(false)}
          visible={showModal}
          text={modalText}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
