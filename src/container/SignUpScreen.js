import * as React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ButtonComponent, CheckBoxComponent} from '@component';

const SignUpScreen = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.header}>
        <Text style={styles.h1}>Đăng Kí</Text>

        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Tên người dùng"></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Email đăng nhập"></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Mật khẩu"></TextInput>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập lại mật khẩu"></TextInput>
        </View>
        <View style={styles.nav}>
          <View style={styles.nav1}>
            <View style={styles.checkbox}>
              <CheckBoxComponent></CheckBoxComponent>
            </View>
            <Text style={styles.text1}>By signing the app you accept the </Text>
            <Text style={styles.text2}>Term of service </Text>
          </View>
          <View style={styles.nav2}>
            <Text style={styles.text4}>and </Text>
            <Text style={styles.text2}>Privacy Policy</Text>
          </View>
        </View>
        <View style={styles.marginButton}>
          <ButtonComponent
            containerStyle={{width: '70%', alignSelf: 'center',}}
            title="Đăng Nhập"
            action={() => navigation.navigate('Main')}></ButtonComponent>
        </View>
        <View style={styles.nav3}>
          <Text style={styles.text3}>Alrealy have an account? </Text>
          <Text
            style={styles.text2}
            onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#202442',
  },
  h1: {
    fontSize: 30,
    color: 'white',
    marginTop: 50,
    marginLeft: 20,
  },
  nav: {
    marginTop: 13,
  },
  nav1: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  nav2: {
    flexDirection: 'row',
    marginLeft: 86,
  },
  nav3: {
    flexDirection: 'row',
    marginTop: 80,
    alignSelf: 'center',
  },
  textInput: {
    width: '70%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#666699',
    marginBottom: 10,
  },
  text1: {
    color: '#666699',
    fontSize: 12,
    marginLeft: 8,
  },
  text2: {
    color: '#41cd7d',
    fontSize: 13,
  },
  text3: {
    color: '#999999',
    fontSize: 13,
  },
  text4: {
    color: '#666699',
    marginLeft: -10,
    fontSize: 12,
  },
  checkbox: {
    marginTop: 2.5,
  },
  marginButton: {
    marginTop: 10,
  }
});
