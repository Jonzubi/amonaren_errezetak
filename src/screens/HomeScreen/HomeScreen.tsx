import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function HomeScreen() {
  const token = useSelector((state: RootState) => state.user.access_token);
  return (
    <View>
      <Text>Esto es HomeScreen</Text>
      <Text>Access token es {token}</Text>
    </View>
  );
}
