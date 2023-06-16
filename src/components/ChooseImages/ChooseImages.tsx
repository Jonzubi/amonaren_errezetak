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
  initialImageUrl?: string;
}

export default function ChooseImages({
  containerStyle,
  containerStyleWithImage,
  initialImageUrl,
  imageStyleWithImage,
  ...props
}: ChooseImagesProps) {
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
  console.log({ initialImageUrl });

  const getUri = () => {
    if (image?.uri) return image.uri;
    if (initialImageUrl) return initialImageUrl;

    return image?.uri;
  };
  return (
    <TouchableOpacity
      onPress={handleChooseImage}
      style={[
        !initialImageUrl && !image && styles.addButtonContainer,
        !initialImageUrl && !image && containerStyle,
        image && styles.containerWithImage,
        image && containerStyleWithImage,
      ]}
    >
      {!initialImageUrl && !image && <FontAwesome name="photo" size={50} />}
      {(initialImageUrl || image) && (
        <Image
          source={{
            uri: getUri(),
          }}
          style={[styles.image, imageStyleWithImage]}
        />
      )}
    </TouchableOpacity>
  );
}
