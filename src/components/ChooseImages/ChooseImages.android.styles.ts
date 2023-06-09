import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: colors.GREY,
    borderRadius: 25,
  },
  containerWithImage: {},
  image: {
    height: 500,
    maxHeight: 500,
    maxWidth: 500,
    borderRadius: 25,
    resizeMode: 'center',
  },
});
