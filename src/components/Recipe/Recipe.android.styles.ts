import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardFooter: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooterUser: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardFooterRating: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterRate: {
    flexDirection: 'row',
    gap: 5,
  },
  cardFooterUsernameText: {},
});
