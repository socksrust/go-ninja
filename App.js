import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,View} from 'react-native';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from './app/redux/store.js';

import RootNavigator from './RootNavigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
	      <RootNavigator />
      </Provider>
    );
  }
}
