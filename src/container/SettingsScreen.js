import React from 'react';
import {View, Text, Button} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonIconComponent} from '@component';
import {AppSizes} from '@theme';

const SettingsScreen = (props) => {
    const {navigation} = props;
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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Settings Screen</Text>
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      );
} 


export default SettingsScreen;