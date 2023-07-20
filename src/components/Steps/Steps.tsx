import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text, Input } from 'react-native-elements';
import ChooseImages from '../ChooseImages/ChooseImages';
import styles from './Steps.android.styles';
import DeleteStepIngredient from '../DeleteStepIngredient/DeleteStepIngredient';
import AddStepIngredient from '../AddStepIngredient/AddStepIngredient';

export interface Step {
  id: string;
  description: string;
  image?: string;
}
export interface StepsProps {
  steps: Step[];
  addStep(): void;
  editStep(id: string, newStep: Step): void;
  deleteStep(id: string): void;
}

export default function Steps({
  steps,
  addStep,
  editStep,
  deleteStep,
}: StepsProps) {
  const { t } = useTranslation();

  const renderStep = (step: Step) => {
    const { description, id } = step;
    return (
      <View style={styles.stepContainer} key={id}>
        <View style={styles.stepInputView}>
          <Input
            onChangeText={(newValue) => {
              let newStep = steps.find((s) => s.id === id);
              newStep!.description = newValue;
              editStep(id, newStep);
            }}
            placeholder={t('addRecipeScreen.add_step_placeholder')}
            value={description}
          />
          <ChooseImages
            initialImageUrl={step.image}
            onImageChosen={(image) => {
              let newStep = steps.find((s) => s.id === id);
              newStep!.image = image;
              editStep(id, newStep);
            }}
            imageStyleWithImage={styles.stepImage}
          />
        </View>
        <DeleteStepIngredient onClick={() => deleteStep(id)} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text h4>{t('addRecipeScreen.steps')}</Text>
      {steps.map((step) => renderStep(step))}
      <AddStepIngredient
        onClick={addStep}
        buttonText={t('addRecipeScreen.step')}
      />
    </View>
  );
}
