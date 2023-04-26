import { FlatList, View } from 'react-native';
import styles from './AddRecipeScreen.android.styles';
import { Text, Input } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import ChooseImages from '../../components/ChooseImages/ChooseImages';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native-elements';

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
    <SafeAreaView style={styles.container}>
      <ChooseImages
        containerStyle={styles.addImage}
        onImageChosen={onImageChosen}
      />
      <Input
        placeholder={t('addRecipeScreen.inputTitle')}
        leftIcon={
          <MaterialIcons name={'title'} size={24} style={{ marginRight: 5 }} />
        }
        onChangeText={(value) => setTitle(value)}
      />
      <Input
        placeholder={t('addRecipeScreen.inputDescription')}
        leftIcon={
          <MaterialIcons
            name={'description'}
            size={24}
            style={{ marginRight: 5 }}
          />
        }
        onChangeText={(value) => setDescription(value)}
        multiline
        inputStyle={{
          height: 300,
        }}
      />
    </SafeAreaView>
  );
}
