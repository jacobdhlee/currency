import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Check from './images/check.png';

const Icon = ({ checkmark, visible, iconBackground }) => {
  if (visible) {
    const iconStyle = [styles.icon];
    if (visible) {
      iconStyle.push(styles.iconVisible);
    }
    if (iconBackground) {
      iconStyle.push({ backgroundColor: iconBackground });
    }
    return (
      <View style={iconStyle}>
        {checkmark
          ? <Image
            style={styles.checkIcon}
            resizeMode="contain"
            source={Check}
          />
          : null}
      </View>
    );
  }
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;
