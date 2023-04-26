import { View, ScrollView } from 'react-native';
import styles from './AddRecipeScreen.android.styles';
import { Text, Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import ChooseImages from '../../components/ChooseImages/ChooseImages';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Divider } from 'react-native-elements';

export default function AddRecipeScreen() {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [recipeImages, setRecipeImages] =
    useState<ImagePicker.ImagePickerAsset>();

  const onImageChosen = (image: ImagePicker.ImagePickerAsset) => {
    setRecipeImages(image);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ChooseImages
          containerStyle={styles.addImage}
          onImageChosen={onImageChosen}
        />
        <Divider style={styles.verticalDivider} />
        <Input
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
        <Text h4>Ingredientes</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
