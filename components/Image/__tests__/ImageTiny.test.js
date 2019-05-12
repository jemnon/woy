import React from 'react';
import { shallow } from 'enzyme';
import ImageTiny from '../ImageTiny';

describe('<ImageTiny />', () => {
  const component = shallow(
    <ImageTiny alt="Example Alt Text" imageUrl="example_image_url.jpg" />,
  );
  it('exists', () => {
    expect(component).toBeDefined();
  });
  it('renders defaults correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
