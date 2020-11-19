import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '@theme';

export default Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: AppColors.black,
  },
});
