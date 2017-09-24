import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavigationRouter from './navigation/NavigationRouter';

class App extends Component {
  render() {
    return (
      <NavigationRouter /> 
    );
  }
}

export default App;
