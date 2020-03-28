import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function navigationTest() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7159c1" />
      <Routes />
    </NavigationContainer>
  );
}
