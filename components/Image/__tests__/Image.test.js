import React from 'react';
import ReactDOM from 'react-dom';
import { getByTestId, render } from 'react-testing-library';
import Image, { getMapToRatios, getTinyUrl, getVariantUrls } from '../Image';

describe('<Image />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders an empty image tag when no props are passed in', () => {
    const { container } = render(<Image />);
    const imageTag = getByTestId(container, 'image-tag');
    expect(imageTag.alt).toBe('');
    expect(imageTag.src).toBe('');
  });
  it('renders an image tag when props are passed in', () => {
    const altText = 'monkees-birds-bees-monkees.jpg';
    const imagePath =
      'https://stuff.fendergarage.com/images/N/W/C/monkees-birds-bees-monkees.jpg';
    const { container } = render(<Image alt={altText} images={[imagePath]} />);
    const imageTag = getByTestId(container, 'image-tag');
    expect(imageTag.alt).toBe(altText);
    expect(imageTag.src).toBe(imagePath);
  });
  describe('getMapToRatios', () => {
    it('should exist', () => {
      expect(getMapToRatios).toBeDefined();
    });
    it('should return the correct ratio', () => {
      expect(getMapToRatios('banner')).toEqual(0.1236);
      expect(getMapToRatios('cinema')).toEqual(0.4255);
      expect(getMapToRatios('golden')).toEqual(0.635);
      expect(getMapToRatios('portrait')).toEqual(1.7863);
      expect(getMapToRatios('square')).toEqual(1);
      expect(getMapToRatios('wideScreen')).toEqual(0.5625);
    });
    it('should return the default', () => {
      expect(getMapToRatios('night-king')).toEqual(1);
      expect(getMapToRatios([])).toEqual(1);
      expect(getMapToRatios({})).toEqual(1);
      expect(getMapToRatios(57)).toEqual(1);
    });
  });
  describe('getTinyUrl', () => {
    it('should get the tiny url', () => {
      expect(getTinyUrl).toBeDefined();
      expect(getTinyUrl('foo.jpg')).toEqual('foo_tiny.jpg');
    });
  });
  describe('getVariantUrls', () => {
    it('should get the variant urls', () => {
      expect(getVariantUrls).toBeDefined();
      expect(getVariantUrls('foo.jpg', 'square', 'small')).toEqual([
        'foo_400x400.jpg',
        'foo_400x400@2x.jpg',
      ]);
    });
  });
});
