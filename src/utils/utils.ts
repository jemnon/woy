import { Element } from 'hast';

const isDomUsable = (): boolean => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

export const getIngredientsFromAst = (element?: Element): string[] => {
  const ingredients: string[] = [];
  const parseIngredients = element?.children.filter(
    child => child.tagName === 'ul',
  );
  if (parseIngredients) {
    const mapped: any = parseIngredients.map((item: any) => {
      return item.children;
    });
    const filtered = mapped.flat().filter((item: any) => item.tagName === 'li');
    filtered.forEach((item: any) => {
      const [{ value }] = item.children;
      ingredients.push(value);
    });
  }
  return ingredients;
};

export const getInstructionsFromAst = (element?: Element): string => {
  let instructions: string[] = [];
  const parseInstructions = element?.children.filter(
    child => child.tagName === 'ol',
  );
  if (parseInstructions) {
    const mapped: any = parseInstructions.map((item: any) => {
      return item.children;
    });
    const filtered = mapped.flat().filter((item: any) => item.tagName === 'li');
    filtered.forEach((item: any) => {
      const [{ value }] = item.children;
      instructions.push(value);
    });
  }
  return instructions.join('');
};

export default isDomUsable;
