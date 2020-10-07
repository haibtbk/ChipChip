import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const CheckBoxComponent = (props) => {
  let {isCheck, status, imageChecked, imageUnChecked} = props;
  let [isChecked, setChecked] = useState(isCheck);

  const onPressCheckbox = () => {
    const newIsChecked = !isChecked;
    setChecked(newIsChecked);
    status && status(newIsChecked);
  };
  return (
    <TouchableOpacity onPress={() => onPressCheckbox()}>
      {isChecked ? (
        <Image style={styles.imageButtonStyle} source={imageChecked}></Image>
      ) : (
        <Image style={styles.imageButtonStyle} source={imageUnChecked}></Image>
      )}
    </TouchableOpacity>
  );
};

CheckBoxComponent.defaultProps = {
  imageChecked: require('@images/checkboxTrue.png'),
  imageUnChecked: require('@images/checkboxFalse.png'),
};
export default CheckBoxComponent;

const styles = StyleSheet.create({
  imageButtonStyle: {
    width: 13,
    height: 13,
  },
  styleMargin: {
    
  }
});
