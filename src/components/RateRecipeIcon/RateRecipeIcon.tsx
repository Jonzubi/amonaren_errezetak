import { ViewStyle, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { likeRecipe } from '../../api/recipe/recipe';

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

  const handlePress = () => {
    likeRecipe(recipeId);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={containerStyle}>
      <AntDesign name={getIconName()} size={20} color={getColor()} />
      <Text>{rateCount}</Text>
    </TouchableOpacity>
  );
}
