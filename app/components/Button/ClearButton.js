import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import image from './images/icon.png';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const ClearButton = ({ onPress, text }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrap}>
      <Image resizeMode="contain" style={styles.icon} source={image} />
      <Text style={styles.text}> {text} </Text>
    </View>
  </TouchableOpacity>
);

ClearButton.prototype = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default ClearButton;
