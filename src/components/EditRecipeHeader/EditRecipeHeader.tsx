import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import styles from './EditRecipeHeader.android.styles';

export function EditRecipeHeader() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
        <AntDesign name="edit" />
        <Text>{t('recipeDetail.edit')}</Text>
      </TouchableOpacity>
    </View>
  );
}
