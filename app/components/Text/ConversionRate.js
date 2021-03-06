import React from 'react';
import { Text } from 'react-native';
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
  date: PropTypes.string,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default ConversionRate;
