import React from 'react';
// import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

// import Home from './pages/Home';
import Login from './pages/Login';
import Content from './pages/Content';

import HomeRoutes from './routes/home.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#7159c1' }, headerTintColor: '#FFF', headerTitleAlign: 'center', }}>
      <Stack.Screen name="Home" component={HomeRoutes} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
