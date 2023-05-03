import { ImagePickerAsset } from 'expo-image-picker';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import ChooseImages from '../ChooseImages/ChooseImages';

interface Step {
  description: string;
  image?: ImagePickerAsset;
}
export interface StepsProps {
  onStepsChange?(steps: Step[]): void;
}

export default function Steps(props: StepsProps) {
  const { onStepsChange } = props;
  const { t } = useTranslation();
  const [steps, setSteps] = useState<Step[]>([{ description: '' }]);

  const renderStep = (step: Step, index: number) => {
    const { description, image } = step;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flex: 3,
            flexDirection: 'column',
          }}
        >
          <Input
            placeholder={t('addRecipeScreen.add_step_placeholder')}
            value={description}
          />
          <ChooseImages
            onImageChosen={(image) => {
              setSteps(
                steps.map((step, i) => {
                  if (i === index) step.image = image;
                  return step;
                }),
              );
            }}
            imageStyleWithImage={{
              maxHeight: 100,
              maxWidth: 100,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}
          onPress={() => {
            const newSteps = steps.filter((ingr, i) => i !== index);
            setSteps(newSteps);
            if (onStepsChange) onStepsChange(newSteps);
          }}
        >
          <MaterialIcons name="delete" color={colors.RED} size={40} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text h4>{t('addRecipeScreen.steps')}</Text>
      {steps.map((step, index) => renderStep(step, index))}
    </View>
  );
}
