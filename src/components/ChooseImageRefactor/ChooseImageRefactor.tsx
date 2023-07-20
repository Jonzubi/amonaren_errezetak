import { ImagePickerOptions, MediaTypeOptions } from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { useState, cloneElement } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { convertToBase64 } from '../../utils/functions/file';
import { StyleProp, ViewStyle } from 'react-native';

interface ChooseImageRefactorProps {
  onImageChosen(base64: string): void;
  children: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  containerStyleWithImage?: StyleProp<ViewStyle>;
}
export default function ChooseImageRefactor({
  children,
  containerStyle,
  containerStyleWithImage,
  onImageChosen,
}: ChooseImageRefactorProps) {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset>();

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
      style={[!image && containerStyle, image && containerStyleWithImage]}
      onPress={handleChooseImage}
    >
      {cloneElement(children, image)}
    </TouchableOpacity>
  );
}
