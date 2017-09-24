import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { InitializeApp } from './utils/InitializeApp';
import NavigationRouter from './navigation/NavigationRouter';

class App extends Component {
  render() {
    const store = InitializeApp();
    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    );
  }
}

export default App;
