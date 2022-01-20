import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './Routes/MyStack';
import BottomTab from './Routes/BottomTab'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure(config)

export default function App() {
  return (
        <NavigationContainer>
        <MyStack />
        
        </NavigationContainer>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
