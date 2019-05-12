import loadImage from '../ImageLoader';

describe('getImage', () => {
  it('should exist', () => {
    expect(loadImage).toBeDefined();
  });
  it('should set up an Image with the necessary properties', () => {
    const image = 'image.jpg';
    const handleLoad = resp => resp;
    const loadedImage = loadImage(image, handleLoad);

    expect(loadedImage).toBeDefined();

    expect(loadedImage.src).toContain(image);
    expect(loadedImage.onload).toBeDefined();
    expect(loadedImage.onerror).toBeDefined();

    expect(loadedImage.onload()).toHaveProperty('event');
    expect(loadedImage.onload()).toHaveProperty('url');
    expect(loadedImage.onload()).toHaveProperty('status');

    expect(loadedImage.onerror()).toHaveProperty('event');
    expect(loadedImage.onerror()).toHaveProperty('url');
    expect(loadedImage.onerror()).toHaveProperty('status');
  });
});
