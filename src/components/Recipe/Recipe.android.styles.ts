import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    border: 1,
    borderWidth: 1,
    borderColor: colors.LIGHTGREY,
    borderRadius: 10,
  },
  clickableContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
  },
  fromNow: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 5,
    padding: 5,
    margin: 15,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fromNowText: {
    color: colors.WHITE,
    fontSize: 12,
    opacity: 1,
  },
  footerContainer: {
    padding: 15,
    gap: 5,
  },
  footerRating: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
  },
  footerRate: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  footerUser: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  usernameText: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: colors.BLACK,
  },
});
