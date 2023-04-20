import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from './ChooseImages.android.styles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import ImagePicker from 'react-native-image-picker';

export default function ChooseImages() {
  const handleChooseImage = () => {};
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
