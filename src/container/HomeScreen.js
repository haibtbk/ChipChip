import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonIconComponent} from '@component';

const HomeScreen = (props) => {
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

  return (
    <ImageBackground
      source={require('@images/backgroundSale.jpg')}
      style={styles.imageBackground}>
      <ScrollView style={styles.container}>
        <View style={styles.nav1}>
          <TextInput
            placeholder="Nhập sản phẩm bạn muốn tìm"
            placeholderTextColor="#6d6dab"
            style={styles.textInput}></TextInput>
          <ButtonIconComponent
            name="search1"
            source="AntDesign"
            size={20}
            containerStyle={styles.searchBar}></ButtonIconComponent>
        </View>
        <View>
          <Text> Các mặt hàng bán chạy nhất</Text>
        </View>
        <View style={styles.nav2}>
          <View style={styles.nav3}>
            <Image
              style={styles.image}
              source={require('@images/aophong/aoPhong1.jpg')}></Image>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('@images/aophong/aoPhong2.jpg')}></Image>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('@images/aophong/aoPhong3.jpg')}></Image>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('@images/aophong/aoPhongTreEm.jpg')}></Image>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 40,
    backgroundColor: '#CD853F',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  nav1: {
    flexDirection: 'row',
  },
  nav2: {
    flexDirection: 'column',
    marginTop: '5%',
  },
  nav3: {
    flexDirection: 'row',
  },
  searchBar: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
});
