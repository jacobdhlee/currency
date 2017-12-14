import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import Color from 'color';
import styles from './styles';

class InputWithButton extends Component {
  constructor(props) {
    super(props);
    this.backgroundColorAnimation = new Animated.Value(0);
  }

  componentDidUpdate() {
    if (parseFloat(this.props.value)) {
      Animated.sequence([
        Animated.timing(this.backgroundColorAnimation, {
          toValue: 1,
        }),
        Animated.timing(this.backgroundColorAnimation, {
          toValue: 0,
        }),
      ]).start();
    }
  }

  render() {
    const {
      onPress, editable = true, buttonText, textColor,
    } = this.props;
    const containerStyle = [styles.container];
    const underlayColor = Color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

    if (!editable) {
      containerStyle.push({
        backgroundColor: this.backgroundColorAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [styles.$inputBackgroundBase, styles.$inputBackgroundAlt],
        }),
      });
    }
    const textStyle = [styles.buttonText];
    if (textColor) {
      textStyle.push({ color: textColor });
    }
    return (
      <Animated.View style={containerStyle}>
        <TouchableHighlight
          underlayColor={underlayColor}
          style={styles.button}
          onPress={onPress}
        >
          <Text style={textStyle}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          {...this.props}
        />
      </Animated.View>
    );
  }
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
  textColor: PropTypes.string,
  value: PropTypes.string,
};

export default InputWithButton;
