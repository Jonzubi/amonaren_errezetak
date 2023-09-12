import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  detailContainer: {
    padding: 15,
  },
  detailUserContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  detailUserNameContainer: {
    flexDirection: 'column',
  },
  detailUserNameText: {
    color: colors.DARKGREY,
  },
  recipeImage: {
    width: width,
    height: height,
    resizeMode: 'center',
    maxHeight: 400,
    backgroundColor: colors.CREME,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 15,
  },
  description: {
    marginVertical: 15,
  },
  rateButton: {
    marginVertical: 15,
    border: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.GREY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    height: 50,
    flex: 1,
    backgroundColor: colors.CREME,
  },
  favouriteText: {
    fontSize: 15,
  },
  divider: {
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  userBottomContaine: {
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  authorText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
