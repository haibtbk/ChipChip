import * as React from 'react';
import {Component, useRef} from 'react';
import {Text, View, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import FabManager from './src/fab/FabManager';
import FabButton from './src/fab/FabButton';
import FabLightbox from './src/fab/FabLightbox';
import {useFocusEffect} from '@react-navigation/native';
import {
  LoginScreen,
  HomeScreen,
  SalesScreen,
  NotificationsScreen,
  SettingsScreen,
  ProfileScreen,
  DialogScreen,
  SignUpScreen
} from '@container';
import * as RNLocalize from 'react-native-localize';
import Localization from '@localization'

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Show Dialog"
        onPress={() => navigation.navigate('Dialog')}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ModalStack = createStackNavigator();
const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const StackFab = createStackNavigator();

function RootTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Hàng cận date"
        options={{
          tabBarLabel: 'Hàng cận date',
          tabBarIcon: () => (
            <Image
              source={require('@images/sale/hot.png')}
              style={{width: 45, height: 40}}
            />
          ),
        }}>
        {() => (
          <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Hàng giảm giá "
        component={SalesScreen}
        options={{
          tabBarLabel: 'Hàng Giảm Giá',
          tabBarIcon: () => (
            <Image
              source={require('@images/sale/sale.png')}
              style={{width: 45, height: 37}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({color, size}) => (
            <EntypoIcon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name ='account-box' color={color} size={size}></MaterialIcons>
          ),
        }}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Profile" component={ProfileScreen} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const RootDialog = () => {
  return (
    <ModalStack.Screen
      name="Dialog"
      component={DialogScreen}
      options={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          };
        },
      }}
    />
  );
};

const navigationRef = React.createRef();

export default App = (props) => {
  Localization.setI18nConfig();
  const fabRef = React.useRef();
  
  const handleLocalizationChange = () => {
    Localization.setI18nConfig();
    this.forceUpdate();
  };

  React.useEffect(() => {
    FabManager.register(fabRef.current);
    return () => {
      FabManager.unRegister();
    };
  }, [fabRef]);

  React.useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return (() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    })
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ width: '100%', height: '100%' }}>
        <RootStack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <RootStack.Screen name="Main">{() => RootTabs()}</RootStack.Screen>
          {RootDialog()}
          <Stack.Screen
            name="fab"
            component={FabLightbox}
            options={{
              headerShown: false,
              animationEnabled: true,
              cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
              cardOverlayEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => {
                return {
                  cardStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: [0, 0.25, 0.7, 1],
                    }),
                  },
                  overlayStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0.5],
                      extrapolate: 'clamp',
                    }),
                  },
                };
              },
            }}
          />
        </RootStack.Navigator>

        <FabButton ref={fabRef} navigationRef={navigationRef} />
      </View>
    </NavigationContainer>
  );
};
