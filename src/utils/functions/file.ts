import { Platform } from 'react-native';

const getFileUri = (uri?: string): string => {
  if (uri === null || uri === undefined) return '';

  return Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
};

export { getFileUri };
