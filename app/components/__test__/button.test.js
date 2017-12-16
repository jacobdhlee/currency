import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'react-dom';
import { TouchableOpacity } from 'react-native';
import sinon from 'sinon';
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

it('handle a press', () => {
  const callback = sinon.spy();
  const wrapper = shallow(<ClearButton text="this should handle a press" onPress={callback} />);
  expect(wrapper.find(TouchableOpacity).length).toBe(1);

  wrapper.find(TouchableOpacity).first().props().onPress();

  expect(callback.called).toBe(true);
});
