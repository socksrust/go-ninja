import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './app/scenes/Home'
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
  }
})

export default AppNavigator
