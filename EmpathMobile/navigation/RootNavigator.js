import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/login';
import SignupScreen from '../screens/SignupScreen/SignupScreen';

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
      name="Signup" 
      component={SignupScreen} 
      options={{
        headerTintColor: 'white',
        headerBackTitle: ' ',
        title: '',
        headerStyle: {
          backgroundColor: '#1A1A1A',
          shadowColor: 'transparent',
        },
      }}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
