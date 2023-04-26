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
  containerWithImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    maxHeight: 500,
    maxWidth: 500,
    borderRadius: 25,
  },
});
