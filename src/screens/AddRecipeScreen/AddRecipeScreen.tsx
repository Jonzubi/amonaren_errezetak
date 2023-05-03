import { ScrollView } from 'react-native';
import styles from './AddRecipeScreen.android.styles';
import { Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ChooseImages from '../../components/ChooseImages/ChooseImages';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImagePickerAsset } from 'expo-image-picker';
import { Divider } from 'react-native-elements';
import Ingredients from '../../components/Ingredients/Ingredients';
import Steps from '../../components/Steps/Steps';

export default function AddRecipeScreen() {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recipeImages, setRecipeImages] = useState<ImagePickerAsset>();
  let ingredients: string[] = [];

  const onImageChosen = (image: ImagePickerAsset) => {
    setRecipeImages(image);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ChooseImages
          containerStyle={styles.addImage}
          containerStyleWithImage={styles.addImageWithImage}
          onImageChosen={onImageChosen}
        />
        <Divider style={styles.verticalDivider} />
        <Input
          style={styles.titleInput}
          placeholder={t('addRecipeScreen.inputTitle')}
          onChangeText={(value) => setTitle(value)}
        />
        <Divider style={styles.verticalDivider} />
        <Input
          placeholder={t('addRecipeScreen.inputDescription')}
          onChangeText={(value) => setDescription(value)}
          multiline
          inputStyle={{
            height: 150,
          }}
        />
        <Divider style={styles.verticalDivider} />
        <Ingredients
          onIngredientsChange={(ingr) => {
            ingredients = ingr;
          }}
        />
        <Divider style={styles.verticalDivider} />
        <Steps />
      </ScrollView>
    </SafeAreaView>
  );
}
