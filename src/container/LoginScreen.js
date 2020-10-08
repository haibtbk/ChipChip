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

import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Alert,
  Linking,
  TextInput,
} from 'react-native';
import {ButtonComponent, CheckBoxComponent, ButtonIconComponent} from '@component';


const LoginScreen = (props) => {
  const {navigation} = props;
  let [isSecureText, setSecureText] = useState(true);

  const onPressEyePassword = () => {
    setSecureText(!isSecureText);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.header}>
        <View style={styles.header}>
          <Text style={styles.h1}>Sign In</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Nhập email đăng nhập"
            placeholderTextColor="#6d6dab"
            color="#6d6dab"
            keyboardType="email-address"
            style={styles.textInput1}></TextInput>
          <View style={styles.stylePassword}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Nhập mật khẩu"
              placeholderTextColor="#6d6dab"
              color="#6d6dab"
              keyboardType="default"
              secureTextEntry={isSecureText}
              style={styles.textInput2}></TextInput>
            <ButtonIconComponent containerStyle={styles.marginEye}
              action={() => onPressEyePassword()}
              name={isSecureText ? 'eye-with-line' : 'eye'}
              size={20}
              color='#6d6dab'
              ></ButtonIconComponent>

            
          </View>

          <View style={styles.remember}>
            <View style={styles.CheckBox}>
              <View style={styles.marginCheckBox}>
                <CheckBoxComponent
                  // imageChecked={require('@images/checkboxTrue.png')}
                  // imageUnChecked={require('@images/checkboxFalse.png')}
                  isCheck={false}
                  status={(isChecked) => {
                    console.log(isChecked);
                  }}></CheckBoxComponent>
              </View>
              <Text style={styles.text1}>Remember Me</Text>
            </View>
            <View>
              <Text style={styles.text2} onPress={() => Alert.alert('ok')}>
                Forget PassWord ?
              </Text>
            </View>
          </View>

          <ButtonComponent
            containerStyle={{width: '100%'}}
            title="Sign In"
            action={() => navigation.navigate('Main')}
          />
          <View style={styles.navHorizontalLine}>
            <View style={styles.horizontalLine}></View>
            <View>
              <Text style={styles.textOr}>Or</Text>
            </View>
            <View style={styles.horizontalLine}></View>
          </View>
          <View style={styles.navFbGmailTwiter}>
            <ButtonIconComponent
              name="facebook-with-circle"
              color="white"
              size={35}
              action={() =>
                Linking.openURL('https://www.facebook.com/')
              }></ButtonIconComponent>
            <ButtonIconComponent
              name="google-plus-official"
              source='FontAwesome'
              size={35}
              color="white"
              action={() =>
                Linking.openURL(
                  'https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
                )
              }></ButtonIconComponent>
            <ButtonIconComponent
              name="twitter-with-circle"
              color="white"
              size={35}
              action={() =>
                Linking.openURL('https://twitter.com/login')
              }></ButtonIconComponent>
          </View>
          <View style={styles.CreateAccount}>
            <Text style={styles.text3}>Don't have an account?</Text>
            <Text
              style={styles.text4}
              onPress={() => navigation.navigate('SignUp')}>
              Create new one
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#16182b',
  },
  header: {},
  body: {
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  textInput1: {
    backgroundColor: '#242846',
    width: '100%',
    height: 45,
    marginTop: 30,
    borderRadius: 20,
    paddingLeft: 25,
  },
  textInput2: {
    backgroundColor: '#242846',
    width: '100%',
    height: 45,
    borderRadius: 20,
    paddingLeft: 25,
  },
  stylePassword: {
    flexDirection: 'row',
    marginTop: 30,
  },
  h1: {
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    textAlign: 'left',
    marginLeft: 20,
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
  imageEye: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  marginEye: {
    position: 'absolute',
    top: 13,
    right: 10,
  },
  remember: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: '6%',
    marginBottom: '6%',
    justifyContent: 'space-between',
  },
  text1: {
    color: '#6d6dab',
  },
  text2: {
    color: '#6d6dab',
  },
  CheckBox: {
    flexDirection: 'row',
  },
  marginCheckBox: {
    marginRight: 5,
  },
  navHorizontalLine: {
    flexDirection: 'row',
    marginTop: 20,
  },
  horizontalLine: {
    width: 160,
    height: 1,
    backgroundColor: '#6d6dab',
    marginTop: 20,
  },
  textOr: {
    marginLeft: 2,
    marginRight: 2,
    fontSize: 15,
    color: '#6d6dab',
    marginTop: 7,
  },
  navFbGmailTwiter: {
    width: '40%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CreateAccount: {
    flexDirection: 'row',
    marginTop: 120,
  },
  text3: {
    color: '#6d6dab',
    marginRight: 10,
  },
  text4: {
    color: '#41cd7d',
  },
});

export default LoginScreen;
