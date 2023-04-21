import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from './ChooseImages.android.styles';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerOptions, MediaTypeOptions } from 'expo-image-picker';

export interface ChooseImagesProps {
  onImageChosen(image: ImagePicker.ImagePickerAsset[]): void;
}

export default function ChooseImages(props: ChooseImagesProps) {
  const { onImageChosen } = props;
  const handleChooseImage = async () => {
    let options: ImagePickerOptions = {
      mediaTypes: MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    };
    const response = await ImagePicker.launchImageLibraryAsync(options);
    if (response.canceled) return;
    if (response.assets === undefined) return;
    const source = response.assets;
    onImageChosen(source);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleChooseImage}
        style={styles.addButtonContainer}
      >
        <Ionicons name="add" size={50} />
      </TouchableOpacity>
    </View>
  );
}
