import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/login';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import UserProfile from '../screens/UserProfileScreen/UserProfile';
import JournalSetting from '../screens/JournalSettings/journalSetting';
import JournalEntry from '../screens/JournalEntryScreen/journalEntry';
import JournalDetail from '../screens/JournalDetailsScreen/journalDetail';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="JournalDetailsScreen">
       <Stack.Screen
      name="JournalDetail"
      component={JournalDetail}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
      name="JournaSetting"
      component={JournalSetting}
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
