import React from 'react';
import renderer from 'react-test-renderer';
import buildStyles from '../../config/styles';

import { ClearButton, styles } from '../Button';

beforeAll(() => {
  buildStyles();
});

it('render successfully', () => {
  const rendered = renderer.create(<ClearButton />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles', () => {
  expect(typeof styles).toBe('object');
});

it('text props passed', () => {
  const rendered = renderer
    .create(<ClearButton text="this is test" />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
