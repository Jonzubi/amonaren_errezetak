import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: { flex: 1 },
  recipeImage: {
    width: width,
    height: height,
    resizeMode: 'cover',
    maxHeight: 400,
  },
  title: {
    fontWeight: 'bold',
  },
});
