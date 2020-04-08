import React from 'react';
// import { View } from 'react-native';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Content from './pages/Content';

import HomeRoutes from './routes/home.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Home" component={HomeRoutes} options={{ title: 'Info Native' }} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
