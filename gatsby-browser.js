import React from 'react';
import { detect } from 'detect-browser';

const browser = detect();

export const onClientEntry = () => {
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};
