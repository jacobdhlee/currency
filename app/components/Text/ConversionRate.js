import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles';

const ConversionRate = ({
  base, date, quote, conversionRate,
}) => (
  <Text style={styles.smallText}>
    1
    {' '}
    {base}
    {' '}
    =
    {' '}
    {conversionRate}
    {' '}
    {quote}
    {' '}
    as of
    {' '}
    {moment(date).format('MMMM D, YYYY')}
    {' '}
  </Text>
);

ConversionRate.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.string,
};

export default ConversionRate;
