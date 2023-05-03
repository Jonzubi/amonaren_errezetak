import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  ingredientContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  inputContainer: {
    flex: 3,
  },
  deleteIngredientButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
