import { View, ViewStyle, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';

interface RateRecipeIconProps {
  containerStyle?: ViewStyle;
  isRated: boolean;
  type: 'Like' | 'Fav';
  rateCount: number;
}
export default function RateRecipeIcon({
  containerStyle,
  isRated,
  type,
  rateCount,
}: RateRecipeIconProps) {
  const getIconName = () => {
    if (type === 'Like') return isRated ? 'heart' : 'hearto';
    return isRated ? 'star' : 'staro';
  };
  return (
    <View style={containerStyle}>
      <AntDesign name={getIconName()} size={20} color={colors.RED} />
      <Text>{rateCount}</Text>
    </View>
  );
}
