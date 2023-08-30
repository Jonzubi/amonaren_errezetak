import { Step } from '../components/Steps/Steps';

export interface Recipe {
  recipeId?: string;
  title: string;
  description: string;
  image?: string;
  ingredients: string[];
  steps: Step[];
  createdBy?: any;
  creationDate?: Date;
  likeCount?: number;
  favCount?: number;
  hasLiked?: boolean;
  hasFaved?: boolean;
}
