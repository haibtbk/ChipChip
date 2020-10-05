import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {AppStyles} from '@theme';
import PropTypes from 'prop-types';
const  ButtonComponent = (props) => {
  let {containerStyle, action, title} = props;

  return (
    <TouchableOpacity
      onPress={() => action && action()}
      style={[styles.button, containerStyle && containerStyle]}>
      <Text style={styles.textLogin}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 5,
    width: 330,
    height: 40,
    backgroundColor: '#41cd7d',
    borderRadius: 50,
  },
  textLogin: {
    ...AppStyles.baseText,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 6,
  },
});

ButtonComponent.defaultProps = {
    containerStyle: {
    },
    title: "",
    action: ()=> {console.log('click button')}
}

ButtonComponent.propTypes = {
    containerStyle: PropTypes.object,
    title: PropTypes.string,
    action: PropTypes.func
}


export default ButtonComponent