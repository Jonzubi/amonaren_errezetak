import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  registerView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 40,
  },
  registerText: {
    color: '#00BB69',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
