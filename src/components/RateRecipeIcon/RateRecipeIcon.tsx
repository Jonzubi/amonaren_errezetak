import { useState, useEffect, useRef } from 'react';
import { ViewStyle, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import {
  likeRecipe,
  unlikeRecipe,
  favRecipe,
  unfavRecipe,
} from '../../api/recipe/recipe';
import { getHeaderWithAccessToken } from '../../utils/functions/axiosOptions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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
  const token = useSelector((state: RootState) => state.user.access_token);
  const [auxIsRated, setAuxIsRated] = useState(isRated);
  const [auxRateCount, setAuxRateCount] = useState(rateCount);
  const isInitialMount = useRef(true);

  const getIconName = () => {
    if (type === 'Like') return auxIsRated ? 'heart' : 'hearto';
    return auxIsRated ? 'star' : 'staro';
  };
  const getAction = () => {
    if (type === 'Like') return auxIsRated ? unlikeRecipe : likeRecipe;
    return auxIsRated ? unfavRecipe : favRecipe;
  };
  const getColor = () => (type === 'Like' ? colors.RED : colors.BLACK);

  const handlePress = () => {
    const action = getAction();

    try {
      action(recipeId, getHeaderWithAccessToken(token));
      setAuxIsRated(!auxIsRated);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setAuxRateCount(auxIsRated ? auxRateCount + 1 : auxRateCount - 1);
  }, [auxIsRated]);

  return (
    <TouchableOpacity onPress={handlePress} style={containerStyle}>
      <AntDesign name={getIconName()} size={20} color={getColor()} />
      <Text>{auxRateCount}</Text>
    </TouchableOpacity>
  );
}
