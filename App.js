// import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function navigationTest() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
