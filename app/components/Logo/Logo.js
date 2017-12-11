import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Animated, Keyboard, Platform } from 'react-native';
import Background from './images/background.png';
import Logos from './images/logo.png';
import styles from './styles';

class Logo extends Component {
  static propType = {
    tintColor: PropTypes.string,
  };
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);

    this.keyboardShow = this.keyboardShow.bind(this);
    this.keyboardHide = this.keyboardHide.bind(this);
  }
  componentDidMount() {
    const os = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardShowListener = Keyboard.addListener(
      `keyboard${os}Show`,
      this.keyboardShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      `keyboard${os}Hide`,
      this.keyboardHide,
    );
  }
  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow() {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: 250,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: 250,
      }),
    ]).start();
  }

  keyboardHide() {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: 250,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: 250,
      }),
    ]).start();
  }

  render() {
    const containerStyle = [
      styles.containerImage,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ];

    const imageStyle = [
      styles.image,
      { width: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <Animated.View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerStyle}
          source={Background}
        >
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={Logos}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Covertor</Text>
      </Animated.View>
    );
  }
}

export default Logo;
