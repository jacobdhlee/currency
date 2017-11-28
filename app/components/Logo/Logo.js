import React from 'react';
import { View, Image, Text } from 'react-native';
import Background from './images/background.png';
import Logos from './images/logo.png';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.containerImage}
      source={Background}
    >
      <Image resizeMode="contain" style={styles.image} source={Logos} />
    </Image>
    <Text style={styles.text}>Currency Covertor</Text>
  </View>
);

export default Logo;
