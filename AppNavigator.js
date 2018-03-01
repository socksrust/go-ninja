import React, { Component } from 'react';
import Home from './app/scenes/Home'
import Job from './app/scenes/Job'
import Login from './app/scenes/Login'
import Signup from './app/scenes/Signup'
import Publish from './app/scenes/Publish'
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
  },
  Job: {
    screen: Job
  },
  Publish: {
    screen: Publish
  }
})

export default RootNavigator