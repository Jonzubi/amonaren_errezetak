import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
  logo: {
    height: 300,
    width: 300,
  },
  button: {
    width: '100%',
    marginVertical: 40,
  },
  divider: {
    alignSelf: 'stretch',
  },
  loginView: {
    flexDirection: 'row',
    marginTop: 40,
  },
  registerText: {
    color: colors.MAIN_GREEN,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
