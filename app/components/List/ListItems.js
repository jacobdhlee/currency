import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from './Icon';

const ListItems = ({
  onPress,
  text,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected
        ? <Icon
          visible={visible}
          checkmark={checkmark}
          iconBackground={iconBackground}
        />
        : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItems.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItems;
