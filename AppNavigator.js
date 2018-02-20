import React, { Component } from 'react';
import Home from './app/scenes/Home'
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
  Home: {
    screen: Home
  }
})

export default RootNavigator