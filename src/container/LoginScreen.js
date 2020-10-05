
import * as React from 'react';
import { Component, useRef } from 'react'
import { Text, View, Button } from 'react-native';
const LoginScreen = (props) => {

    const { navigation } = props
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                title="Click to Login "
                onPress={() => navigation.navigate('Main')}
            />
            <Button
                title="Click to Signup "
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}

export default LoginScreen