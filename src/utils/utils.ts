import { Element } from 'hast';

const isDomUsable = (): boolean => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

export const generateFromAst = (
  element?: Element,
  name = 'ingredients',
): string | string[] => {
  let parsedAst: string[] = [];
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
      parsedAst.push(value);
    });
  }
  return name === 'ingredients' ? parsedAst : parsedAst.join('');
};

export default isDomUsable;
