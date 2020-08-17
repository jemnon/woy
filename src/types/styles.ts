export type HeadingProps = BaseTypographyProps;
export type ParagraphProps = BaseTypographyProps;
export type TextAlign = 'left' | 'center' | 'right';
export type SpacingDensity = 'cozy' | 'normal' | 'roomy';

export interface BaseTypographyProps {
  textAlign?: TextAlign;
  spacingDensity?: SpacingDensity;
}

export interface HeadlineProps {
  bottomSpacing?: string;
  whiteSpace?: string;
}
