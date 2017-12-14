import React, { Component } from 'react';
import { Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const WINDOW_DIMENSIONS = Dimensions.get('window');
const SHOULD_ANIMATE = process.env.NODE_ENV !== 'development';

class AnimateIn extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentWillMount() {
    if (SHOULD_ANIMATE) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        delay: this.props.delay || 0,
        duration: this.props.duration || 500,
      }).start();
    } else {
      this.animatedValue.setValue(1);
    }
  }
  render() {
    let styles = {};
    const { type } = this.props;
    if (type === 'fadeIn') {
      styles = {
        opacity: this.animatedValue,
        transform: [{ scale: this.animatedValue }],
      };
    } else if (type === 'fromTop') {
      styles = {
        opacity: this.animatedValue,
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-WINDOW_DIMENSIONS.height, 0],
            }),
          },
        ],
      };
    } else if (type === 'fromBottom') {
      styles = {
        opacity: this.animatedValue,
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [WINDOW_DIMENSIONS.height, 0],
            }),
          },
        ],
      };
    }

    return (
      <Animated.View style={[{ width: '100%', alignSelf: 'center' }, styles]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

AnimateIn.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['fromBottom', 'fromTop', 'fadeIn']),
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default AnimateIn;
