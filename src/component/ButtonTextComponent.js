import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AppSizes} from '@theme';
import PropTypes from 'prop-types';

const ButtonTextComponent = (props) => {
  const {action, containerStyle, textStyle, title} = props;

  return (
    <TouchableOpacity
      onPress={() => action && action()}
      style={[styles.button, containerStyle && containerStyle]}>
      <Text style={[styles.text, textStyle && textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};


export default ButtonTextComponent;

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 35,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#D87093',
  },
  text: {
    fontSize: AppSizes.fontXSmall,
    color: 'white',
  },
});

ButtonTextComponent.defaultProps = {
  containerStyle: {},
  title: '',
  action: () => {
    console.log('click button');
  },
  textStyle: {},
};

ButtonTextComponent.propTypes = {
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string,
  action: PropTypes.func,
};
