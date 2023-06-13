import { Image, View } from 'react-native';
import styles from './RecipeDetailsStep.android.styles';
import { Text } from 'react-native-elements';
import { getImageUrlWithName } from '../../utils/functions/image';

interface RecipeDetailsStepProps {
  stepNumber: number;
  stepDescription: string;
  stepImage?: string;
}
export default function RecipeDetailsStep({
  stepNumber,
  stepDescription,
  stepImage,
}: RecipeDetailsStepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.stepNumberContainer}>
          <Text style={styles.stepNumberText}>{stepNumber}</Text>
        </View>
        <Text style={styles.stepDescriptionContainer}>{stepDescription}</Text>
      </View>
      {stepImage && stepImage.length > 0 && (
        <Image
          style={styles.stepImage}
          source={{ uri: getImageUrlWithName(stepImage) }}
        />
      )}
    </View>
  );
}
