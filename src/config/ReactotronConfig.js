import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.2.105'})
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  tron.clear();

  console.tron = tron;
}
