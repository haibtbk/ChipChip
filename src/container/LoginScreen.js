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
import {ScrollView, Text, View, StyleSheet, Alert, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ButtonComponent, CheckBoxComponent} from '@component';

const LoginScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.header}>
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
              <View style={styles.marginCheckBox}><CheckBoxComponent
                // imageChecked={require('@images/checkboxTrue.png')}
                // imageUnChecked={require('@images/checkboxFalse.png')}
                isCheck={false}
                status={(isChecked) => {
                  console.log(isChecked);
                }}></CheckBoxComponent></View>
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
          <View style={styles.navHorizontalLine}>
            <View style={styles.horizontalLine}></View>
            <View>
              <Text style={styles.textOr}>Or</Text>
            </View>
            <View style={styles.horizontalLine}></View>
          </View>
          <View style={styles.navFbGmailTwiter}>
            <Image
              onPress={() => Alert.alert('FaceBook')}
              style={styles.imageFbGmailTwiter}
              source={require('@images/imageFB.png')}></Image>
            <Image
              onPress={() => Alert.alert('Twiter')}
              style={styles.imageFbGmailTwiter}
              source={require('@images/imageTwiter.png')}></Image>
            <Image
              onPress={() => Alert.alert('Gmail')}
              style={styles.imageFbGmailTwiter}
              source={require('@images/imageGmail.png')}></Image>
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
  },
  header: {backgroundColor: '#202442'},
  body: {
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#666699',
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 5,
  },
  h1: {
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    textAlign: 'left',
    marginLeft: 20,
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
    marginTop: 10,
    marginBottom: 10,
  },
  text1: {
    marginLeft: 3,
    marginTop: 0,
    color: '#666699',
  },
  text2: {
    marginLeft: 100,
    marginTop: 11,
    color: '#666699',
  },
  CheckBox: {
    marginTop: 11,
    flexDirection: 'row',
    marginLeft: 20,
  },
  marginCheckBox: {
    marginTop: 3,
  },
  navHorizontalLine: {
    flexDirection: 'row',
    marginTop: 20,
  },
  horizontalLine: {
    width: 160,
    height: 0.2,
    backgroundColor: '#666699',
    marginTop: 21,
  },
  textOr: {
    marginLeft: 2,
    marginRight: 2,
    fontSize: 15,
    color: '#666699',
    marginTop: 7,
  },
  navFbGmailTwiter: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  imageFbGmailTwiter: {
    marginLeft: 15,
    marginRight: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  CreateAccount: {
    flexDirection: 'row',
    marginTop: 120,
  },
  text3: {
    color: '#666699',
    marginRight: 10,
  },
  text4: {
    color: '#41cd7d',
  },
});

export default LoginScreen;
