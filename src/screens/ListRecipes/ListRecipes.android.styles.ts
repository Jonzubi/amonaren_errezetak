import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  myRecipeContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  myRecipeImage: {
    height: 75,
    width: 75,
  },
  myRecipeInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  myRecipeTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  myRecipeSubInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myRecipesRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  myRecipesRatingSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  myRecipesDate: {
    color: colors.DARKGREY,
    fontStyle: 'italic',
  },
});
