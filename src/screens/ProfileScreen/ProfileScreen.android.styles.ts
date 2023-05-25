import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  container: {
    padding: 15,
  },
  userMainContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-end',
  },
  usernameText: {
    color: colors.BLACK,
    fontStyle: 'italic',
  },
  formContainer: {},
});
