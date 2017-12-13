import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import GearImage from './images/gear.png';
import WarningImage from './images/warning.png';
import styles from './styles';

const Header = ({ onPress, onWarningPress, isConnected }) => (
  <View style={styles.container}>
    {!isConnected
      ? <TouchableOpacity style={styles.button} onPress={onWarningPress}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={WarningImage}
        />
        </TouchableOpacity>
      : null}
    <TouchableOpacity
      style={[styles.button, styles.buttonRight]}
      onPress={onPress}
    >
      <Image resizeMode="contain" style={styles.icon} source={GearImage} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
  isConnected: PropTypes.bool,
  onWarningPress: PropTypes.func,
};

export default Header;
