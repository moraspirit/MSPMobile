import {
  AppRegistry
} from 'react-native';
import OneSignal from 'react-native-onesignal';
import App from './src/App';
import { onIds, onOpened, onReceived, onRegistered } from './src/utils/InitializeApp';

OneSignal.addEventListener('received', onReceived);
OneSignal.addEventListener('opened', onOpened);
OneSignal.addEventListener('registered', onRegistered);
OneSignal.addEventListener('ids', onIds);
console.log('OneSignal linstners are now registered!');

AppRegistry.registerComponent('MoraSpirit', () => App);
