import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const ButtonIconTextComponent = (props) => {
  const {
    action,
    name,
    size,
    source,
    containerStyle,
    color,
    textStyle,
    title,
  } = props;
  const getIconSource = (source) => {
    switch (source) {
      case 'Entypo':
        return Entypo;
      case 'Feather':
        return Feather;
      case 'AntDesign':
        return AntDesign;
      case 'FontAwesome':
        return FontAwesome;
      case 'Foundation':
        return Foundation;
      case 'MaterialIcons':
        return MaterialIcons;
      default:
        return Entypo;
    }
  };
  const ICON = getIconSource(source);

  return (
    <TouchableOpacity
      style={containerStyle && containerStyle}
      onPress={() => action && action()}>
      <ICON name={name} size={size} {...(color && {color})}></ICON>
      {/* Khi key value trung nhau co the viet gon ai duoc {color: color} === {color}) */}
      <Text style={textStyle && textStyle}>   {title}</Text>
      <Entypo
        name="chevron-right"
        size={15}
        style={{position: 'absolute', right: 5,}}
        color={'#A9A9A9'}
        ></Entypo>
    </TouchableOpacity>
  );
};


ButtonIconTextComponent.defaultProps = {
    containerStyle: {},
    title: '',
    action: () => {
      console.log('click button');
    },
    textStyle: {},
  };
  
  ButtonIconTextComponent.propTypes = {
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    title: PropTypes.string,
    action: PropTypes.func,
  };
  

export default ButtonIconTextComponent;
