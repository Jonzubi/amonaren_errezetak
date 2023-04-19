import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_GREEN,
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});
