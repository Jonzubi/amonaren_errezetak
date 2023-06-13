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
    resizeMode: 'cover',
    maxHeight: 400,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 15,
  },
  description: {
    marginVertical: 15,
  },
  favouriteButton: {
    marginVertical: 15,
    border: 1,
    borderWidth: 1,
    borderColor: colors.DARKGREY,
    borderRadius: 10,
    backgroundColor: colors.GREY,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  favouriteText: {
    fontSize: 15,
  },
  divider: {
    marginVertical: 15,
  },
  subdivider: {
    marginVertical: 10,
    borderStyle: 'dotted',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
