import React from 'react';
import {View, Text, Button} from 'react-native';

const DialogScreen = (props) => {
    const {navigation} = props;
    return (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}>
          <View
            style={{
              width: '80%',
              height: '60%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 12,
            }}>
            <Text style={{fontSize: 30}}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
          </View>
        </View>
        )
}

export default DialogScreen;