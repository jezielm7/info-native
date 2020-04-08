import React from 'react';
import { Image } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeIcon from 'react-native-vector-icons/AntDesign';
import ContentIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <HomeIcon name="home" size={22} color={focused ? '#fff' : '#ddd'} />
          ),
        }}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{
          tabBarLabel: 'Content',
          tabBarIcon: ({ focused }) => (
            <ContentIcon name="table-of-contents" size={22} color={focused ? '#fff' : '#ddd'} />
          ),
        tabBarOptions: { showLabel: false }
        }}
      /> 
    </Tab.Navigator>
  );
}
