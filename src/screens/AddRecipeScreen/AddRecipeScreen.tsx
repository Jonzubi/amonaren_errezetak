import { View } from 'react-native';
import styles from './AddRecipeScreen.android.styles';
import { Text } from '@rneui/themed';
import { useTranslation } from 'react-i18next';

export default function AddRecipeScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text h3>{t('addRecipeScreen.title')}</Text>
    </View>
  );
}
