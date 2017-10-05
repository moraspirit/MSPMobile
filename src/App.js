import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import { InitializeApp, onOpened, onReceived, onRegistered, onIds } from './utils/InitializeApp';
import NavigationRouter from './navigation/NavigationRouter';
import { saveToDevice, getFromDevice } from './utils/Async';

class App extends Component {

  componentWillUnmount() {
    OneSignal.removeEventListener('received', onReceived);
    OneSignal.removeEventListener('opened', onOpened);
    OneSignal.removeEventListener('registered', onRegistered);
    OneSignal.removeEventListener('ids', onIds);
    console.log('Onesignal Listeners are removed!');
  }


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
