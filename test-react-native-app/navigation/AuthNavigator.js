import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import LoginScreen from './../screens/auth/LoginScreen'
import SignupScreen from './../screens/auth/SignupScreen'
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen'

 export default createStackNavigator(
  {
    Login: { screen: LoginScreen, navigationOptions: {header: null} },
    SignUp: { screen: SignupScreen, navigationOptions: {header: null} },
    ForgotPassword: { screen: ForgotPasswordScreen, navigationOptions: {header: null} },
  }
);
