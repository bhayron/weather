import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home'

import styles from '../styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Caralho!</Text>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

