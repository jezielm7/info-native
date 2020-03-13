import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Content from '../pages/Content';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
  return (
      <Tab.Navigator initialRouteName="Home" >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Content" component={Content} />
      </Tab.Navigator>
  );
}
