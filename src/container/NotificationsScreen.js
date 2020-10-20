import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonIconComponent} from '@component';
import {AppSizes, AppColors} from '@theme';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {API} from '@network';
import {FlatList} from 'react-native-gesture-handler';
import {usesAutoDateAndTime} from 'react-native-localize';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);
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

  const getNotificationList = () => {
    API.getNotificationList()
      .then((res) => {
        const notifications = res?.data ?? [];
        setNotifications(notifications);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNotificationList();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.nav1}>
        <Text style={{fontSize: 25}}> Thông báo</Text>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={styles.nav2}>
              <Text style={{color: 'black'}}>
               {index}. {item.name}
              </Text>
            </View>
          );
        }}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  nav1: {
    width: '100%',
    height: 60,
    backgroundColor: AppColors.fabButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav2: {
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default NotificationsScreen;
