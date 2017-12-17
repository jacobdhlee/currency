import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'react-dom';
import { TouchableOpacity } from 'react-native';
import sinon from 'sinon';
import buildStyles from '../../config/styles';
import { Header, styles } from '../Header';

beforeAll(() => {
  buildStyles();
});

it('render successfully', () => {
  const rendered = renderer.create(<Header />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles', () => {
  expect(typeof styles).toBe('object');
});

it('handle a press', () => {
  const callback = sinon.spy();
  const wrapper = shallow(<Header onPress={callback} onWarningPress={callback} />);
  expect(wrapper.find(TouchableOpacity).length).toBe(2);
  wrapper.find(TouchableOpacity).first().props().onPress();
  expect(callback.calledOnce).toBe(true);
});
