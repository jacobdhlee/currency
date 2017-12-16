import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import { Container, styles } from '../Container';

it('render successfully', () => {
  const rendered = renderer.create(<Container />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles', () => {
  expect(typeof styles).toBe('object');
});

it('renders the child props', () => {
  const rendered = renderer.create(<Container><View /></Container>).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('uses the specified backgroundColor, if provided', () => {
  const rendered = renderer
    .create(<Container backgroundColor="yellow" />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
