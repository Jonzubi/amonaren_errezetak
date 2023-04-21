import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from './ChooseImages.android.styles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { ImageLibraryOptions, Asset } from 'react-native-image-picker';

export interface ChooseImagesProps {
  onImageChosen(image: Asset[]): void;
}

export default function ChooseImages(props: ChooseImagesProps) {
  const { onImageChosen } = props;
  const handleChooseImage = () => {
    let options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 5,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel || response.errorCode) return;
      if (response.assets === undefined) return;
      const source = { uri: response.assets };
      onImageChosen(source.uri);
    });
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
