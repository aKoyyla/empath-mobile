import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/login';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import UserProfile from '../screens/UserProfileScreen/UserProfile';
import ForgotPassword from '../screens/ForgotPasswordScreen/forgotPassword';
import ResetPassword from '../screens/ResetPasswordScreen/resetPassword';
import JournalEntry from '../screens/JournalEntryScreen/journalEntry';
import JournalSetting from '../screens/JournalSettings/journalSetting';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
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
      name="Forgotpassword"
      component={ForgotPassword}
      options={{
        headerShown: false,
      }}
    />

      <Stack.Screen
      name="reset-password"
      component={ResetPassword}
      options={{
        headerShown: false,
      }}
    />

      <Stack.Screen
      name="UserProfile"
      component={UserProfile}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
      name="JournalEntry"
      component={JournalEntry}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="JournalSetting"
      component={JournalSetting}
      options={{
        headerShown: false,
      }}
    />

    </Stack.Navigator>
  );
};

export default RootNavigator;
