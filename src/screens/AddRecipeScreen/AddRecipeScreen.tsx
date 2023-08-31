import { ScrollView, View } from 'react-native';
import { createRef, useEffect } from 'react';
import styles from './AddRecipeScreen.android.styles';
import { Input, Button } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, Image, Text } from 'react-native-elements';
import Ingredients from '../../components/Ingredients/Ingredients';
import Steps from '../../components/Steps/Steps';
import colors from '../../constants/colors';
import { createRecipe, editRecipe } from '../../api/recipe/recipe';
import { useIngredients } from '../../hooks/useIngredients';
import { useSteps } from '../../hooks/useSteps';
import CustomToast, {
  ToastType,
} from '../../components/CustomToast/CustomToast';
import { useModal } from '../../hooks/useModal';
import { getHeaderWithAccessToken } from '../../utils/functions/axiosOptions';
import { UseRecipesType, useRecipes } from '../../hooks/useRecipes';
import ChooseImageRefactor from '@components/ChooseImageRefactor/ChooseImageRefactor';
import { useUserStore } from 'src/zustand/userStore';

interface AddRecipeScreenProps {
  recipeId?: string;
}

export default function AddRecipeScreen({ recipeId }: AddRecipeScreenProps) {
  const { access_token } = useUserStore();
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [description, setDescription] = useState('');
  const {
    modalText: errorModalText,
    setModalText: setErrorModalText,
    setShowModal: setErrorShowModal,
    showModal: errorShowModal,
  } = useModal(t('errors.generic'));

  const {
    modalText: successModalText,
    setModalText: setSuccessModalText,
    setShowModal: setSuccessShowModal,
    showModal: successShowModal,
  } = useModal(t('addRecipeScreen.postSuccess'));
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

  const resetStates = () => {
    if (recipeId) return;
    setTitle('');
    setDescription('');
    setRecipeImage(undefined);
    setEditRecipeImage(undefined);
    setIngredients([]);
    setSteps([]);
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
          recipeId,
          title,
          description,
          image: recipeImage,
          ingredients,
          steps,
        },
        getHeaderWithAccessToken(access_token),
      );
      setSuccessShowModal(true);
    } catch (error) {
      setErrorModalText(t('errors.generic'));
      setErrorShowModal(true);
    } finally {
      setPostingRecipe(false);
      resetStates();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} style={styles.container}>
        {(editRecipeImage || recipeImage) && (
          <ChooseImageRefactor onImageChosen={onImageChosen}>
            <Image
              source={{
                uri: recipeImage ? recipeImage : editRecipeImage,
              }}
              style={styles.addImageWithImage}
            />
          </ChooseImageRefactor>
        )}
        {!(editRecipeImage || recipeImage) && (
          <ChooseImageRefactor onImageChosen={onImageChosen}>
            <View style={styles.addImage}>
              <FontAwesome name="photo" size={50} />
            </View>
          </ChooseImageRefactor>
        )}
        <Divider style={styles.verticalDivider} />
        <Text h4 style={{ marginBottom: 25 }}>
          {t('addRecipeScreen.title')}
        </Text>
        <Input
          errorMessage={errorTitle}
          style={styles.titleInput}
          placeholder={t('addRecipeScreen.inputTitle')}
          onChangeText={setTitle}
          value={title}
          ref={titleRef}
        />
        <Divider style={styles.verticalDivider} />
        <Text h4 style={{ marginBottom: 25 }}>
          {t('addRecipeScreen.description')}
        </Text>
        <Input
          placeholder={t('addRecipeScreen.inputDescription')}
          onChangeText={setDescription}
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
          type={ToastType.ERROR}
          closeModal={() => setErrorShowModal(false)}
          visible={errorShowModal}
          text={errorModalText}
        />
        <CustomToast
          type={ToastType.SUCCESS}
          closeModal={() => setSuccessShowModal(false)}
          visible={successShowModal}
          text={successModalText}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
