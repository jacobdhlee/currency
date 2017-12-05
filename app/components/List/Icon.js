import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Check from './images/check.png';

const Icon = ({ checkmark, visible }) => {
  const iconStyle = [styles.icon];
  visible ? iconStyle.push(styles.iconVisible) : iconStyle;
  return (
    <View style={iconStyle}>
      {checkmark
        ? <Image style={styles.checkIcon} resizeMode="contain" source={Check} />
        : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

export default Icon;
