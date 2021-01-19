import React from 'react';
import Paragraph from '../Paragraph';

export default {
  title: 'Atoms/Paragraph',
};

export const Normal = () => <Paragraph>Paragraph</Paragraph>;
export const Italic = () => (
  <Paragraph fontStyle="italic">Paragraph Italic</Paragraph>
);
export const Bold = () => (
  <Paragraph fontWeight="bold">Paragraph Bold</Paragraph>
);
