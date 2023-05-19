import { useState } from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';
import styles from './ChooseImages.android.styles';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerOptions, MediaTypeOptions } from 'expo-image-picker';
import { convertToBase64 } from '../../utils/functions/file';

export interface ChooseImagesProps {
  onImageChosen(base64: string): void;
  containerStyle?: StyleProp<ViewStyle>;
  containerStyleWithImage?: StyleProp<ViewStyle>;
  imageStyleWithImage?: StyleProp<ImageStyle>;
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
    let { uri } = source[0];
    if (!uri.includes(';base64,')) {
      try {
        const fileContent = await convertToBase64(uri);
        uri = `data:image/png;base64,${fileContent}`;
      } catch (error) {}
    }
    onImageChosen(uri);
    setImage(source[0]);
  };
  return (
    <TouchableOpacity
      onPress={handleChooseImage}
      style={[
        !image && styles.addButtonContainer,
        !image && props.containerStyle,
        image && styles.containerWithImage,
        image && props.containerStyleWithImage,
      ]}
    >
      {!image && <FontAwesome name="photo" size={50} />}
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={[
            {
              height: image.height,
              width: image.width,
              ...styles.image,
            },
            props.imageStyleWithImage,
          ]}
        />
      )}
    </TouchableOpacity>
  );
}
