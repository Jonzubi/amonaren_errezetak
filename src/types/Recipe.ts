import { ImagePickerAsset } from 'expo-image-picker';
import { Step } from '../components/Steps/Steps';

export interface Recipe {
  title: string;
  description: string;
  image?: string;
  ingredients: string[];
  steps: Step[];
}
