import React from 'react';
import {
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import {Home, Setting} from '../../screens';
const TabBotom = createMaterialBottomTabNavigator ();

export default function () {
  return (
    <TabBotom.Navigator >
      <TabBotom.Screen name="home" component={Home} />
      <TabBotom.Screen name="setting" component={Setting} />
    </TabBotom.Navigator>
  );
}
