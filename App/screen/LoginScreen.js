import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
} from 'native-base';
import { connect } from 'react-redux';
import { actionLogin } from '../actions/loginAction';

// Ở đây chúng ta sử dung plugin-proposal-decorators để thực hiện connect đến store của redux.
@connect(
  state => ({
    login: state.loginReducer, // Ở đây là loginReducer mà chúng ta đã add vào RootReducer.
  }),
  { actionLogin }, // Các action mà bạn muốn gọi trong view. Ở đây là actionLogin.
)
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleLoginAction(event) {
    console.log(`handleLoginAction: ${JSON.stringify(this.state)}`);
    
    // Chúng ta gọi action Login khi mà user click vào button login
    this.props.actionLogin({
      username: this.state.username,
      password: this.state.password,
    });
  }

  handleUsername(text, e) {
    console.log(`text: ${text}`);
    this.setState({
      username: text,
    });
  }

  handlePassword(text, e) {
    console.log(`text: ${text}`);
    this.setState({
      password: text,
    });
  }

  render() {
    return (      
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="username"
                onChangeText={this.handleUsername.bind(this)}
                value={this.state.username}
              />
            </Item>

            <Item>
              <Input
                placeholder="password"
                onChangeText={this.handlePassword.bind(this)}
                value={this.state.password}
                secureTextEntry={true}
              />
            </Item>

            <Button onPress={this.handleLoginAction.bind(this)}>
              <Text>Send</Text>
            </Button>
          </Form>

          <Text>{`${this.props.login.isLoading}` || 'Loading'}</Text>
          <Text>{this.props.login.refreshToken || 'refreshToken'}</Text>
          <Text>{this.props.login.accessToken || 'accessToken'}</Text>
        </Content>
      </Container>
    );
  }
}