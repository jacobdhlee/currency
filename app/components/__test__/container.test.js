import React from 'react';
import renderer from 'react-test-renderer';

import { Container, styles } from '../Container';

it('render successfully', () => {
  const rendered = renderer.create(<Container />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles', () => {
  expect(typeof styles).toBe('object');
});
