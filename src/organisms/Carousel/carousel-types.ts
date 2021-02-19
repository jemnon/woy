export type Easing = 'ease' | 'ease-in-out' | 'ease-in' | 'ease-out' | 'linear';

export interface CarouselContentProps {
  easing?: Easing;
  transitionDuration?: string;
  xPos?: number;
  h?: number;
  w?: number;
}

export interface CarouselDotProps {
  isCurrent: boolean;
}

type Direction = 'left' | 'right';

export interface CarouselButtonProps {
  direction?: Direction;
  isDisabled?: boolean;
}
