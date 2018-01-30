import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,View} from 'react-native';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from './app/redux/store.js';
import { dispatch } from './app/redux/store.js';

const myApp = () => (
    <Provider store={store}>
      <App />
    </Provider>)

AppRegistry.registerComponent('goNinja', () => myApp);
