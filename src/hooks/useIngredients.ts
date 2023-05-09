import { useState } from 'react';

export function useIngredients() {
  const [ingredients, setIngredients] = useState<string[]>(['']);

  const addIngredient = () => {
    const newIngr = [...ingredients, ''];
    setIngredients(newIngr);
  };

  const deleteIngredient = (index: number) => {
    const newIngr = ingredients.filter((ingr, i) => i !== index);
    setIngredients(newIngr);
  };

  const editIngredient = (index: number, newValue: string) => {
    const newIgr = ingredients.map((ingr, i) => {
      if (index !== i) return ingr;
      return newValue;
    });
    setIngredients(newIgr);
  };

  return { ingredients, addIngredient, deleteIngredient, editIngredient };
}
