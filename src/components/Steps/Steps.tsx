import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
export default function Steps() {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text h4>{t('addRecipeScreen.steps')}</Text>
      <View style={{ flex: 1, flexDirection: 'column' }}></View>
    </View>
  );
}
