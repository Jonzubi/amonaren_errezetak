import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerUserAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 5,
  },
  usernameText: {
    color: colors.BLACK,
    fontStyle: 'italic',
  },
});
