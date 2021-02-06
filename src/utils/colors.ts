/* eslint-disable no-bitwise */
interface RGBFromHex {
  red: string;
  green: string;
  blue: string;
}

/**
 * Does the hexadecimal to rgb conversion.
 * @param hex {String} - valid hexadecimal color string
 * @return {RGBFromHex} - returns an object containing rgb values
 */
export const getRGBFromHex = (hex: string): RGBFromHex => {
  let red = '0';
  let green = '0';
  let blue = '0';

  if (hex.length === 4) {
    red = `0x${hex[1]}${hex[1]}`;
    green = `0x${hex[2]}${hex[2]}`;
    blue = `0x${hex[3]}${hex[3]}`;
  }

  if (hex.length === 7) {
    red = `0x${hex[1]}${hex[2]}`;
    green = `0x${hex[3]}${hex[4]}`;
    blue = `0x${hex[5]}${hex[6]}`;
  }

  return {
    red,
    green,
    blue,
  };
};

/**
 * Calls getHexFromRGB() and then returns it in rgb() format.
 * @param hex {String} - hexadecimal color string.
 * @return {String} - in rgb() format.
 */
export const hexToRGB = (hex: string): string => {
  const { red, green, blue } = getRGBFromHex(hex);
  return `rgb(${+red}, ${+green}, ${+blue})`;
};

/**
 * Calls getHexFromRGB() and then returns it in rgb() format.
 * @param hex {String} - hexadecimal color string.
 * @param alpha {Number} - alpha amount.
 * @return {String} - in rgba() format.
 */
export const hexToRGBA = (hex: string, alpha = 100): string => {
  const parseAlpha = (alpha * 0.01).toFixed(2);
  const { red, green, blue } = getRGBFromHex(hex);
  return `rgba(${+red}, ${+green}, ${+blue}, ${parseAlpha})`;
};

/**
 * Darkens or lightens a hexadecimal color. Default is -10.
 * @param hex {String} - hexadecimal color string.
 * @return {String} - creates a new hex color that is dimmer or lighter;
 */
export const luminosity = (hex: string, amount = -10): string => {
  hex = hex.slice(1);

  const num = parseInt(hex, 16);

  let red = (num >> 16) + amount;
  if (red > 255) {
    red = 255;
  } else if (red < 0) {
    red = 0;
  }

  let green = (num & 0x0000ff) + amount;
  if (green > 255) {
    green = 255;
  } else if (green < 0) {
    green = 0;
  }

  let blue = ((num >> 8) & 0x00ff) + amount;
  if (blue > 255) {
    blue = 255;
  } else if (blue < 0) {
    blue = 0;
  }

  return `#${(green | (blue << 8) | (red << 16)).toString(16)}`;
};
