import { ImagePickerAsset } from 'expo-image-picker';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

interface Step {
  description: string;
  image?: ImagePickerAsset;
}
export default function Steps() {
  const { t } = useTranslation();
  const [steps, setSteps] = useState<Step[]>([{ description: '' }]);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text h4>{t('addRecipeScreen.steps')}</Text>
      <View style={{ flex: 1, flexDirection: 'column' }}></View>
    </View>
  );
}
