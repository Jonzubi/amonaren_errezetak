import { View, Image, Text } from 'react-native';
import styles from './NoRecipes.android.styles';
import { useTranslation } from 'react-i18next';

export default function NoRecipes() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../assets/NoRecipes.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{t('noRecipes.mainText')}</Text>
    </View>
  );
}
