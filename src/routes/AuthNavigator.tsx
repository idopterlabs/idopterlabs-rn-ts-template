import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Auth/Login';

import { AuthStackRouter } from '@typings/routes';

const AuthStack = createNativeStackNavigator<AuthStackRouter>();

export default () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={() => ({
        animation: 'slide_from_left',
        headerShown: false,
      })}
    />
  </AuthStack.Navigator>
);
