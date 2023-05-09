import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  addImage: {
    width: '100%',
    backgroundColor: colors.GREY,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 20,
  },
  addImageWithImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    maxHeight: 500,
  },
  verticalDivider: {
    marginVertical: 50,
  },
  titleInput: { fontSize: 20, fontWeight: '600' },
  postButton: {
    marginBottom: 50,
  },
});
