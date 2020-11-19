import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';
import {AppStyles, AppColors, AppFonts, AppSizes} from '@theme';
import IconRight from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
const InputTextComponent = (props) => {
  let {
    text,
    imgSrc,
    isshowArrowRight,
    action,
    containerStyle,
    textStyle,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => action && action()}
      style={[containerStyle && containerStyle]}>
      <Image src={imgSrc}></Image>
      <Text
        style={[styles.titleText,  textStyle && textStyle]}>
        {text}
      </Text>
      {isshowArrowRight && <IconRight name="right"></IconRight>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  formText: {
    paddingLeft: AppFonts.paddingXMedium,
  },
  titleText: {
    padding: AppSizes.padding,
    fontSize: AppFonts.fontLarge,
  },
});

InputTextComponent.defaultProps = {
  containerStyle: {},
  textStyle: {},
  text: {},
  imgSrc: false,
  isshowArrowRight: false,
  action: () => {
    console.log('Tap');
  },
};

InputTextComponent.propTypes = {
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  text: PropTypes.string,
  action: PropTypes.func,
  imgSrc: PropTypes.any,
};

export default InputTextComponent;
