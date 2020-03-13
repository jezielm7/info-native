import React from 'react';
import { Image } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import home from '../images/home.png';
import content from '../images/content.png';

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
            <Image source={home} color={focused ? '#fff' : '#ddd'} />
          ),
        }}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{
          tabBarLabel: 'Content',
          tabBarIcon: ({ focused }) => (
            <Image source={content} color={focused ? '#fff' : '#ddd'} />
          ),
        tabBarOptions: { showLabel: false }
        }}
      /> 
    </Tab.Navigator>
  );
}
