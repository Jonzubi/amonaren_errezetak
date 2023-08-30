import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './EditRecipeHeader.android.styles';
import { useRouter } from 'expo-router';

interface EditRecipeHeaderProps {
  recipeId: string;
}
export function EditRecipeHeader({ recipeId }: EditRecipeHeaderProps) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          router.push({
            pathname: `edit-recipe`,
            params: { recipeId },
          });
        }}
      >
        <AntDesign name="edit" />
        <Text>{t('recipeDetail.edit')}</Text>
      </TouchableOpacity>
    </View>
  );
}
