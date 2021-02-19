import { FluidObject } from 'gatsby-image';

export interface VideoReel {
  id: string;
  secure_url: string;
  format: string;
  duration: number;
}

export interface VideoReelThumb {
  fluid: FluidObject;
}
