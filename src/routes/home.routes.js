import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Content from '../pages/Content';

const Tab = createMaterialBottomTabNavigator();

export default function HomeRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="#eee"
      barStyle={{ backgroundColor: '#7159c1' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={25} color={focused ? '#fff' : '#ddd'} />
          ),
        }}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{
          tabBarLabel: 'Content',
          tabBarIcon: ({ focused }) => (
            <Icon name="content-paste" size={25} color={focused ? '#fff' : '#ddd'} />
          ),
        tabBarOptions: { showLabel: false }
        }}
      /> 
    </Tab.Navigator>
  );
}
