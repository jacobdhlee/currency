import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';

import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, editable = true, buttonText } = props;
  const containerStyle = [styles.container];
  const underlayColor = Color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
  props.editable
    ? containerStyle
    : containerStyle.push(styles.containerDisable);

  const textStyle = [styles.buttonText];
  if (props.textColor) {
    textStyle.push({ color: props.textColor });
  }
  return (
    <View style={containerStyle}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={textStyle}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.prototype = {
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
  textColor: PropTypes.string,
};

export default InputWithButton;
