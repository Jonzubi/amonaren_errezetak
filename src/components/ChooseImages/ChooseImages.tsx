import { useState } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle, Image } from 'react-native';
import styles from './ChooseImages.android.styles';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerOptions, MediaTypeOptions } from 'expo-image-picker';

export interface ChooseImagesProps {
  onImageChosen(image: ImagePicker.ImagePickerAsset): void;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function ChooseImages(props: ChooseImagesProps) {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset>();
  const { onImageChosen } = props;
  const handleChooseImage = async () => {
    let options: ImagePickerOptions = {
      mediaTypes: MediaTypeOptions.Images,
      allowsMultipleSelection: false,
    };
    const response = await ImagePicker.launchImageLibraryAsync(options);
    if (response.canceled) return;
    if (response.assets === undefined) return;
    const source = response.assets;
    onImageChosen(source[0]);
    setImage(source[0]);
  };
  console.log(image);
  return (
    <TouchableOpacity
      onPress={handleChooseImage}
      style={[
        !image && styles.addButtonContainer,
        !image && props.containerStyle,
        image && styles.containerWithImage,
      ]}
    >
      {!image && <FontAwesome name="photo" size={50} />}
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ height: image.height, width: image.width, ...styles.image }}
        />
      )}
    </TouchableOpacity>
  );
}
