import {
  generateTinyUrl,
  generateVariantUrls,
  generateSrcSet,
  getFileExtenstion,
  getWithOutFileExtension,
  getLoadedState,
  imageForLoad,
  isRetina,
  parseRatio,
} from '../ImageUtils';

describe('generateTinyUrl', () => {
  it('should exist', () => {
    expect(generateTinyUrl).toBeDefined();
  });
  it('should generate the desired url for a tiny image', () => {
    const imageUrl = 'image-url.jpg';
    expect(generateTinyUrl(imageUrl)).toEqual('image-url_tiny.jpg');
    expect(generateTinyUrl()).toBeNull();
  });
});

describe('generateVariantUrls', () => {
  const sizes = ['@1x', '@2x', '@3x'];
  it('should exist', () => {
    expect(generateVariantUrls).toBeDefined();
  });
  it('should not return a list of images', () => {
    expect(generateVariantUrls()).toBeNull();
  });
  it('should return a list of images without variants', () => {
    expect(
      generateVariantUrls('image-1.jpg', 'duff-man', 'large', sizes),
    ).toEqual(['image-1.jpg', 'image-1@2x.jpg', 'image-1@3x.jpg']);
    expect(
      generateVariantUrls('image-1.jpg', 'cinema', 'giant', sizes),
    ).toEqual(['image-1.jpg', 'image-1@2x.jpg', 'image-1@3x.jpg']);
  });
  it('should generlate a list of images with for the widescreen variant', () => {
    expect(
      generateVariantUrls('image-1.jpg', 'wideScreen', 'large', sizes),
    ).toEqual([
      'image-1_1400x809.jpg',
      'image-1_1400x809@2x.jpg',
      'image-1_1400x809@3x.jpg',
    ]);
  });
  it('should generlate a list of images with for the square variant', () => {
    expect(
      generateVariantUrls('image-1.jpg', 'square', 'small', sizes),
    ).toEqual([
      'image-1_400x400.jpg',
      'image-1_400x400@2x.jpg',
      'image-1_400x400@3x.jpg',
    ]);
  });
  it('should generlate a list of images with for the cinema variant', () => {
    expect(
      generateVariantUrls('image-1.jpg', 'cinema', 'medium', sizes),
    ).toEqual([
      'image-1_800x340.jpg',
      'image-1_800x340@2x.jpg',
      'image-1_800x340@3x.jpg',
    ]);
  });
  it('should generlate a list of images with for the banner variant', () => {
    expect(
      generateVariantUrls('image-1.jpg', 'banner', 'large', sizes),
    ).toEqual([
      'image-1_1440x178.jpg',
      'image-1_1440x178@2x.jpg',
      'image-1_1440x178@3x.jpg',
    ]);
  });
});
describe('generateSrcSet', () => {
  it('should exist', () => {
    expect(generateSrcSet).toBeDefined();
  });
  it('should return null if argument is not an array', () => {
    expect(generateSrcSet(0)).toBeNull();
    expect(generateSrcSet('')).toBeNull();
    expect(generateSrcSet({})).toBeNull();
  });
  it('should return a valid srcSet string', () => {
    const images = ['image-1.jpg', 'image-1@2x.jpg'];
    expect(generateSrcSet(images)).toEqual([
      'image-1.jpg 1x',
      'image-1@2x.jpg 2x',
    ]);
  });
});

describe('getFileExtenstion', () => {
  it('should exist', () => {
    expect(getFileExtenstion).toBeDefined();
  });
  it('should return null if argument is not a string', () => {
    expect(getFileExtenstion(0)).toBeNull();
    expect(getFileExtenstion([])).toBeNull();
    expect(getFileExtenstion({})).toBeNull();
  });
  it('should return the file extension for a valid argument', () => {
    expect(getFileExtenstion('image-1_1440x178.jpg')).toEqual('jpg');
    expect(getFileExtenstion('image-1_1440x178.png')).toEqual('png');
    expect(getFileExtenstion('image-1_1440x178.gif')).toEqual('gif');
  });
});

describe('getWithOutFileExtension', () => {
  it('should exist', () => {
    expect(getWithOutFileExtension).toBeDefined();
  });
  it('should return null if argument is not a string', () => {
    expect(getWithOutFileExtension(0)).toBeNull();
    expect(getWithOutFileExtension([])).toBeNull();
    expect(getWithOutFileExtension({})).toBeNull();
  });
  it('should return the file extension for a valid argument', () => {
    expect(getWithOutFileExtension('image-1_1440x178.jpg')).toEqual(
      'image-1_1440x178',
    );
    expect(getWithOutFileExtension('image-1_1440x178@2x.jpg')).toEqual(
      'image-1_1440x178@2x',
    );
    expect(getWithOutFileExtension('image-1_1440x178@3x.jpg')).toEqual(
      'image-1_1440x178@3x',
    );
  });
});

describe('getLoadedState', () => {
  it('should exist', () => {
    expect(getLoadedState).toBeDefined();
  });
  it('should return false when no arguments are passed in', () => {
    expect(getLoadedState()).toBeFalsy();
  });
  it('should return false when response type !== success', () => {
    expect(getLoadedState({ type: 'failure' })).toBeFalsy();
  });
  it('should return true when response type === success', () => {
    expect(getLoadedState({ type: 'success' })).toBeTruthy();
  });
});

describe('imageForLoad', () => {
  it('should exist', () => {
    expect(imageForLoad).toBeDefined();
  });
  it('should return null if the argument is not an array', () => {
    expect(imageForLoad(0)).toBeNull();
    expect(imageForLoad('')).toBeNull();
    expect(imageForLoad({})).toBeNull();
  });
  it('should return the first image in an array if DOM is usable', () => {
    const images = ['firstImage', 'secondImage'];
    expect(imageForLoad(images)).toEqual('secondImage');
  });
});

describe('isRetina', () => {
  it('should exist', () => {
    expect(isRetina).toBeDefined();
  });
  it('should return true if retina', () => {
    expect(isRetina()).toBeTruthy();
  });
});

describe('parseRatio', () => {
  it('should exist', () => {
    expect(parseRatio).toBeDefined();
  });
  it('should return 0 if the provided argument is not a number', () => {
    expect(parseRatio(0 / 0)).toEqual(0);
    expect(parseRatio('')).toEqual(0);
    expect(parseRatio({})).toEqual(0);
    expect(parseRatio([])).toEqual(0);
  });
  it('should return a two decimal string ratio if the provided argument is a number', () => {
    expect(parseRatio(1)).toEqual('100.00');
    expect(parseRatio(1 / 4)).toEqual('25.00');
    expect(parseRatio(2 / 3)).toEqual('66.67');
  });
});
