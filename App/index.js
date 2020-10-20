// app/index.js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import redux from './config/redux';
import { View } from 'react-native';
import LoginScreen from './screens/LoginScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={redux.store}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <LoginScreen />
        </View>
      </Provider>
    );
}
}