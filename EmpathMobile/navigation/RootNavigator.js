import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/login';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import UserProfile from '../screens/UserProfileScreen/UserProfile';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
      name="Auth" 
      component={AuthScreen} 
      options={{
        headerTintColor: 'white',
        headerBackTitle: ' ',
        title: '',
        headerStyle: {
          backgroundColor: '#1A1A1A',
          shadowColor: 'transparent',
        },
      }}/>
      <Stack.Screen
      name="UserProfile"
      component={UserProfile}
      options={{
        headerShown: false,
      }}
    />
    </Stack.Navigator>
  );
};

export default RootNavigator;
