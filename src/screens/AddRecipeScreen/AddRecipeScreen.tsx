import { ScrollView, Platform } from 'react-native';
import { createRef } from 'react';
import styles from './AddRecipeScreen.android.styles';
import { Input, Button } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import ChooseImages from '../../components/ChooseImages/ChooseImages';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImagePickerAsset } from 'expo-image-picker';
import { Divider, Text } from 'react-native-elements';
import Ingredients from '../../components/Ingredients/Ingredients';
import Steps, { Step } from '../../components/Steps/Steps';
import colors from '../../constants/colors';
import { createRecipe } from '../../api/recipe/recipe';
import { useIngredients } from '../../hooks/useIngredients';

export default function AddRecipeScreen() {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorDescription, setErrorDescription] = useState('');

  const [recipeImage, setRecipeImage] = useState<ImagePickerAsset>();
  const [postingRecipe, setPostingRecipe] = useState(false);
  let scrollRef = createRef<ScrollView>();
  const titleRef = useRef<any>(null);
  const descRef = useRef<any>(null);

  const { ingredients, addIngredient, deleteIngredient, editIngredient } =
    useIngredients();
  let steps: Step[] = [];

  const onImageChosen = (image: ImagePickerAsset) => {
    setRecipeImage(image);
  };

  const validateForm = (): boolean => {
    let isValid = true;
    console.log({ title, description, ingredients });
    if (title.length === 0) {
      titleRef?.current?.shake();
      setErrorTitle(t('addRecipeScreen.errorTitle'));
      isValid = false;
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }

    if (description.length === 0) {
      descRef?.current?.shake();
      setErrorDescription(t('addRecipeScreen.errorDescription'));
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
      setPostingRecipe(false);
      const response = await createRecipe({
        title,
        description,
        image:
          Platform.OS === 'ios'
            ? recipeImage?.uri.replace('file://', '')
            : recipeImage?.uri,
        ingredients,
        steps,
      });
    } catch (error) {}
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView ref={scrollRef} style={styles.container}>
        <ChooseImages
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
          ref={titleRef}
        />
        <Divider style={styles.verticalDivider} />
        <Text h4 style={{ marginBottom: 25 }}>
          {t('addRecipeScreen.description')}
        </Text>
        <Input
          errorMessage={errorDescription}
          placeholder={t('addRecipeScreen.inputDescription')}
          onChangeText={(value) => setDescription(value)}
          multiline
          inputStyle={{
            height: 150,
          }}
          ref={descRef}
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
          onStepsChange={(stps) => {
            steps = stps;
          }}
        />
        <Button
          title={t('addRecipeScreen.postRecipe')}
          color={colors.MAIN_GREEN}
          buttonStyle={styles.postButton}
          onPress={postRecipe}
          loading={postingRecipe}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
