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
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD905xAAL0bH7Uhty_dOvEn_egPitzwpyo",
  authDomain: "go-ninja.firebaseapp.com",
  databaseURL: "https://go-ninja.firebaseio.com",
  projectId: "go-ninja",
  storageBucket: "go-ninja.appspot.com",
  messagingSenderId: "195552296602"
};

export const Firebase = firebase.initializeApp(config);

const myApp = () => (
    <Provider store={store}>
      <App />
    </Provider>)

AppRegistry.registerComponent('goNinja', () => myApp);
