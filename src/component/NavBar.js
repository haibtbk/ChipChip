import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppSizes} from '@theme';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NavBar = (props) => {
  const {title} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="arrow-back"
        color
        style={styles.icon}
        size={20}
        onPress={() => navigation.pop(1)}></MaterialIcons>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height / 15,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  text: {
      fontSize: AppSizes.fontMedium,
      color: 'white',
  }
});

export default NavBar;
