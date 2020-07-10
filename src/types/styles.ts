export type TextAlign = 'left' | 'center' | 'right';
export type VerticalRhythm = 'cozy' | 'normal' | 'roomy';

export interface HeadlineProps {
  bottomSpacing?: string;
  whiteSpace?: string;
}

export type HeadingProps = BaseTypographyProps;
export type ParagraphProps = BaseTypographyProps;

export interface BaseTypographyProps {
  textAlign?: TextAlign;
  verticalRhythm?: VerticalRhythm;
}
