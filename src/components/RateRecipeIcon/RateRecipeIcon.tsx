import { View, ViewStyle, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';

interface RateRecipeIconProps {
  containerStyle?: ViewStyle;
  isRated: boolean;
  type: 'Like' | 'Fav';
  rateCount: number;
  recipeId: string;
}
export default function RateRecipeIcon({
  containerStyle,
  isRated,
  type,
  rateCount,
  recipeId,
}: RateRecipeIconProps) {
  const getIconName = () => {
    if (type === 'Like') return isRated ? 'heart' : 'hearto';
    return isRated ? 'star' : 'staro';
  };
  const getColor = () => (type === 'Like' ? colors.RED : colors.BLACK);
  return (
    <View style={containerStyle}>
      <AntDesign name={getIconName()} size={20} color={getColor()} />
      <Text>{rateCount}</Text>
    </View>
  );
}
