import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import { InitializeApp } from './utils/InitializeApp';
import NavigationRouter from './navigation/NavigationRouter';
import { saveToDevice, getFromDevice } from './utils/Async';
import { NOTIFICATIONS_STORE } from './utils/AsyncKeys';

const saveNotification = async (data) => {
  if (data.length > 1) {
    console.log('STACKED NOTIFICATION!');
    data.forEach((item) => {
      saveNotification(item);
    });
  }
  let oldNotifications = await getFromDevice(NOTIFICATIONS_STORE);
  console.log('oldNotifications ', oldNotifications);
  if (oldNotifications) {
    oldNotifications.push(data);
    saveToDevice(NOTIFICATIONS_STORE, oldNotifications);
  } else {
    let notifications = [];
    notifications.push(data);
    saveToDevice(NOTIFICATIONS_STORE, notifications);
  }
}

class App extends Component {
  componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('registered', this.onRegistered);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('openResult: ', openResult);
    if (openResult.notification.groupedNotifications) {
      // stacked notifications
      saveNotification(openResult.notification.groupedNotifications);
    } else {
      // single notification
      saveNotification(openResult.notification.payload);
    }
  }

  onRegistered(notifData) {
    console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
    console.log('Device info: ', device);
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
