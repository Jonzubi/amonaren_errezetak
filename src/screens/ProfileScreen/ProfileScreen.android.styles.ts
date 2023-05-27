import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  userMainContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'flex-end',
  },
  usernameText: {
    color: colors.DARKGREY,
    fontStyle: 'italic',
  },
  inputStyles: {
    flex: 1,
  },
  formContainer: {},
  nameSurnameText: {
    flex: 1,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
