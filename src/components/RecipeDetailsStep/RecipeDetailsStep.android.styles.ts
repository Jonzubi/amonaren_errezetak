import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  container: {
    marginVertical: 25,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stepNumberContainer: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: colors.DARKGREY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: colors.WHITE,
  },
  stepDescriptionContainer: {
    flex: 1,
  },
  stepImage: {
    marginTop: 10,
    height: 150,
    width: 150,
    resizeMode: 'center',
  },
});
