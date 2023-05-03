import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  stepContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  stepInputView: {
    flex: 3,
    flexDirection: 'column',
  },
  stepImage: {
    maxHeight: 100,
    maxWidth: 100,
  },
  deleteStepButton: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
