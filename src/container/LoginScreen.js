import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Alert,
  Linking,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {AppStyles, AppSizes, AppColors} from '@theme';
import {
  ButtonComponent,
  CheckBoxComponent,
  ButtonIconComponent,
} from '@component';
import {API} from '@network';
import Localization from '@localization';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { isEmail, isEmpty } from 'validator';

const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
      return <small className="form-text text-danger">Invalid email format</small>;
  }
}

const minLength = (value) => {
  if (value.trim().length < 6) {
      return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
  }
}



const LoginScreen = (props) => {
  const {navigation} = props;
  let [isSecureText, setSecureText] = useState(true);

  const onPressEyePassword = () => {
    setSecureText(!isSecureText);
  };

  const doLogin = () => {
    const params = {
      username: 'hai',
      password: 'bui',
    };
    API.login(params)
      .then((res) => {
        navigation.navigate('Main');
      })
      .catch((err) => Alert.alert('Error', err.message ?? 'Login fail!!!'));
  };
  return (
    <ScrollView
      style={{height: '100%', backgroundColor: '#16182b'}}
      contentContainerStyle={{height: '100%'}}>
      <View style={styles.container}>
        <ButtonIconComponent
          name="close"
          source="AntDesign"
          color={'white'}
          action={() => navigation.pop(1)}
          containerStyle={styles.goBack}
        />
        <Text style={styles.h1}>{Localization.t('signin')}</Text>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Nhập email đăng nhập"
          placeholderTextColor="#6d6dab"
          color="#6d6dab"
          validations={[required, email]}
          keyboardType="email-address"
          style={styles.textInput1}></TextInput>
        <View style={styles.stylePassword}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#6d6dab"
            color="#6d6dab"
            validations={[required, minLength]}
            keyboardType="default"
            secureTextEntry={isSecureText}
            style={styles.textInput2}></TextInput>
          <ButtonIconComponent
            containerStyle={styles.marginEye}
            action={() => onPressEyePassword()}
            name={!isSecureText ? 'eye-with-line' : 'eye'}
            size={20}
            color="#6d6dab"></ButtonIconComponent>
        </View>
        <View style={styles.remember}>
          <View style={styles.CheckBox}>
            <CheckBoxComponent
              isCheck={false}
              status={(isChecked) => {
                console.log(isChecked);
              }}
            />
            <Text style={styles.text1}>{Localization.t('rememberMe')}</Text>
          </View>
          <Text style={styles.text2} onPress={() => Alert.alert('ok')}>
            {Localization.t('forgotPassword')}
          </Text>
        </View>

        <ButtonComponent
          containerStyle={{width: '100%'}}
          title={Localization.t('signin')}
          action={() => doLogin()}
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
            action={() => Linking.openURL('https://www.facebook.com/')}
          />

          <ButtonIconComponent
            name="google-plus-official"
            source="FontAwesome"
            size={35}
            color="white"
            action={() =>
              Linking.openURL(
                'https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
              )
            }
          />
          <ButtonIconComponent
            name="twitter-with-circle"
            color="white"
            size={35}
            action={() => Linking.openURL('https://twitter.com/login')}
          />
        </View>
        <View style={styles.CreateAccount}>
          <Text style={styles.text3}>{Localization.t('dontHaveAccount')}</Text>
          <Text
            style={styles.text4}
            onPress={() => navigation.replace('SignUp')}>
            {Localization.t('createNewAccount')}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    padding: AppSizes.paddingMedium,
  },
  header: {backgroundColor: 'red', justifyContent: 'center'},
  body: {
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
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
    alignItems: 'center',
    padding: AppSizes.paddingXSmall,
  },
  text1: {
    marginLeft: AppSizes.paddingSmall,
    color: '#6d6dab',
  },
  text2: {
    color: '#6d6dab',
  },
  CheckBox: {
    alignItems: 'center',
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
  goBack: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
