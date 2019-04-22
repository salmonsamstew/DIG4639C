import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
<<<<<<< HEAD
import LinksScreen from '../screens/LinksScreen';
import Detail from '../screens/Detail';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: Detail,
=======
import DetailScreen from '../screens/Detail';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
>>>>>>> cca949b5ff178a251102000ab56290d09980f824
}, {initialRouteName:"Home"});

export default HomeStack;

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
