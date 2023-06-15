import { useState } from 'react';
import { Step } from '../components/Steps/Steps';

export function useSteps() {
  const [steps, setSteps] = useState<Step[]>([{ description: '' }]);

  const addStep = () => {
    const newSteps: Step[] = [...steps, { description: '' }];
    setSteps(newSteps);
  };
  const deleteStep = (index: number) => {
    const newSteps = steps.filter((step, i) => i !== index);
    setSteps(newSteps);
  };

  const editStep = (index: number, newStep: Step) => {
    const newSteps: Step[] = steps.map((step, i) => {
      if (index !== i) return step;
      return newStep;
    });
    setSteps(newSteps);
  };

  return { steps, addStep, deleteStep, editStep, setSteps };
}
