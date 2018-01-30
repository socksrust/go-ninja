import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './app/scenes/Login'
import Signup from './app/scenes/Signup'
import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
})

export default RootNavigator
