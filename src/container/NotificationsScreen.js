import React from 'react';
import {View, Text} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonIconComponent} from '@component';
import {AppSizes} from '@theme';

const NotificationsScreen = () => {
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Notifications!</Text>
          <Text>Nonono</Text>
        </View>
      );
}

export default NotificationsScreen;