import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';

const getFileUri = (uri?: string): string => {
  if (uri === null || uri === undefined) return '';

  return Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
};

const convertToBase64 = async (imageUri: string): Promise<string> => {
  try {
    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return base64;
  } catch (error) {
    console.error('Error al convertir la imagen a base64:', error);
    return '';
  }
};

export { getFileUri, convertToBase64 };
