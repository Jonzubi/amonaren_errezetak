import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  addImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.LIGHTGREY,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: colors.DARKGREY,
  },
  addImageWithImage: {
    height: 500,
    maxHeight: 500,
    maxWidth: 500,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  verticalDivider: {
    marginVertical: 50,
  },
  titleInput: { fontSize: 20, fontWeight: '600' },
  postButton: {
    marginBottom: 50,
  },
});
