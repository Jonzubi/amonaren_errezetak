import { ImagePickerAsset } from 'expo-image-picker';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import ChooseImages from '../ChooseImages/ChooseImages';
import styles from './Steps.android.styles';
import DeleteStepIngredient from '../DeleteStepIngredient/DeleteStepIngredient';
import AddStepIngredient from '../AddStepIngredient/AddStepIngredient';

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

  const onAddStep = () => {
    const newSteps: Step[] = [...steps, { description: '' }];
    setSteps(newSteps);
    if (onStepsChange) onStepsChange(newSteps);
  };
  const onDeleteStep = (index: number) => {
    const newSteps = steps.filter((ingr, i) => i !== index);
    setSteps(newSteps);
    if (onStepsChange) onStepsChange(newSteps);
  };

  const renderStep = (step: Step, index: number) => {
    const { description } = step;
    return (
      <View style={styles.stepContainer} key={`step${index}`}>
        <View style={styles.stepInputView}>
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
            imageStyleWithImage={styles.stepImage}
          />
        </View>
        <DeleteStepIngredient onClick={() => onDeleteStep(index)} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text h4>{t('addRecipeScreen.steps')}</Text>
      {steps.map((step, index) => renderStep(step, index))}
      <AddStepIngredient
        onClick={onAddStep}
        buttonText={t('addRecipeScreen.step')}
      />
    </View>
  );
}
