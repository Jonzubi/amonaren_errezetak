import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './EditRecipeHeader.android.styles';
import { useNavigation } from '@react-navigation/native';

interface EditRecipeHeaderProps {
  recipeId: string;
}
export function EditRecipeHeader({ recipeId }: EditRecipeHeaderProps) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('Main_User_EditRecipe', {
            recipeId,
          });
        }}
      >
        <AntDesign name="edit" />
        <Text>{t('recipeDetail.edit')}</Text>
      </TouchableOpacity>
    </View>
  );
}
