import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text, Input } from 'react-native-elements';
import ChooseImages from '../ChooseImages/ChooseImages';
import styles from './Steps.android.styles';
import DeleteStepIngredient from '../DeleteStepIngredient/DeleteStepIngredient';
import AddStepIngredient from '../AddStepIngredient/AddStepIngredient';

export interface Step {
  description: string;
  image?: string;
}
export interface StepsProps {
  steps: Step[];
  addStep(): void;
  editStep(index: number, newStep: Step): void;
  deleteStep(index: number): void;
}

export default function Steps({
  steps,
  addStep,
  editStep,
  deleteStep,
}: StepsProps) {
  const { t } = useTranslation();

  const renderStep = (step: Step, index: number) => {
    const { description } = step;
    return (
      <View style={styles.stepContainer} key={`step${index}`}>
        <View style={styles.stepInputView}>
          <Input
            onChangeText={(newValue) => {
              let newStep = steps[index];
              newStep.description = newValue;
              editStep(index, newStep);
            }}
            placeholder={t('addRecipeScreen.add_step_placeholder')}
            value={description}
          />
          <ChooseImages
            initialImageUrl={step.image}
            onImageChosen={(image) => {
              let newStep = steps[index];
              newStep.image = image;
              editStep(index, newStep);
            }}
            imageStyleWithImage={styles.stepImage}
          />
        </View>
        <DeleteStepIngredient onClick={() => deleteStep(index)} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text h4>{t('addRecipeScreen.steps')}</Text>
      {steps.map((step, index) => renderStep(step, index))}
      <AddStepIngredient
        onClick={addStep}
        buttonText={t('addRecipeScreen.step')}
      />
    </View>
  );
}
