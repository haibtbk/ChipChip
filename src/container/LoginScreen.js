import {CheckBox} from 'native-base';
// import * as React from 'react';
// import { Component, useRef } from 'react'
// import { Text, View, Button } from 'react-native';
// const LoginScreen = (props) => {

//     const { navigation } = props
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Login Screen</Text>
//             <Button
//                 title="Click to Login "
//                 onPress={() => navigation.navigate('Main')}
//             />
//             <Button
//                 title="Click to Signup "
//                 onPress={() => navigation.navigate('SignUp')}
//             />
//         </View>
//     );
// }

// export default LoginScreen

import * as React from 'react';
import {Component, useRef} from 'react';
import {Text, View, StyleSheet, Switch, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import {ButtonComponent, CheckBoxComponent} from '@component';

const LoginScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Đăng Nhập</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          placeholder="Nhập tên đăng nhập"
          style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Nhập Mật Khẩu"
          style={styles.textInput}></TextInput>
        <View style={styles.remember}>
          <View style={styles.CheckBox}>
            <CheckBoxComponent></CheckBoxComponent>
            <Text style={styles.text1}>Remember Me</Text>
          </View>
          <View>
            <Text style={styles.text2} onPress={() => Alert.alert('ok')}>
              Forget PassWord ?
            </Text>
          </View>
        </View>

        <ButtonComponent
          containerStyle={{width: '90%'}}
          title="Đăng Nhập"
          action={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202442',
  },
  header: {},
  body: {
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#242846',
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
  },
  h1: {
    fontSize: 30,
    color: 'white',
    textAlign: 'left',
  },
  button: {
    marginBottom: 5,
    width: 330,
    height: 40,
    backgroundColor: '#41cd7d',
    borderRadius: 50,
  },
  textLogin: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 6,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  remember: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 10,
  },
  text1: {
    marginLeft: 3,
    marginTop: 2,
  },
  text2: {
    marginLeft: 100,
    marginTop: 10,
  },
  CheckBox: {
    marginTop: 8,
    flexDirection: 'row',
    marginLeft: 20,
  },
});

export default LoginScreen;
