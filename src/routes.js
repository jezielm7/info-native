import React from 'react';
// import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Content from './pages/Content';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#7159c1' }, headerTintColor: '#FFF', headerTitleAlign: 'center', }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
}
