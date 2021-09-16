import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { StyleSheet, Text, View } from 'react-native';

import {ThemeProvider} from 'styled-components';
import { useFonts,
  Poppins_100Thin,  
  Poppins_400Regular,
  Poppins_200ExtraLight,
 } from '@expo-google-fonts/poppins';


import Home from './screens/Home'

import styles from './style';
import theme from './theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,    
    Poppins_400Regular,
    Poppins_200ExtraLight
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    
    <View style={styles.container}>
      <Text>Caralho!</Text>
      <ThemeProvider theme={theme}>
      <Home />
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
   
  );
}

