import { useState } from 'react';
import { Step } from '../components/Steps/Steps';
import { randomUUID } from 'expo-crypto';

export function useSteps() {
  const [steps, setSteps] = useState<Step[]>([
    { description: '', id: randomUUID() },
  ]);

  const addStep = () => {
    const newSteps: Step[] = [...steps, { description: '', id: randomUUID() }];
    setSteps(newSteps);
  };
  const deleteStep = (id: string) => {
    const newSteps = steps.filter((step) => step.id !== id);
    setSteps(newSteps);
  };

  const editStep = (id: string, newStep: Step) => {
    const newSteps: Step[] = steps.map((step, i) => {
      if (step.id !== id) return step;
      return newStep;
    });
    setSteps(newSteps);
  };

  return { steps, addStep, deleteStep, editStep, setSteps };
}
