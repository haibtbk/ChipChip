import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setTimeout(() => {
        FabManager.show();
      }, 100);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        FabManager.hide();
      };
    }, []),
  );
const image = { require: '@images/backgroundSale.jpg'}
  return (
    <ImageBackground source={image}>
      <ScrollView style={styles.container}>
        <TextInput
          placeholder="Nhập sản phẩm bạn muốn tìm"
          style={styles.textInput}></TextInput>
        <View></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
  },
});
