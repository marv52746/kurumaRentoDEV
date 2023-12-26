import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

import Foundation from 'react-native-vector-icons/Foundation';
import LocationScreen from '../screens/LocationScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import GameDetailsScreen from '../screens/GameDetailsScreen';
import SpecsScreen from '../screens/SpecsScreen';
import DateTimeScreen from '../screens/DateTimeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import HomeLocationScreen from '../screens/HomeLocationScreen';
import AllCarsScreen from '../screens/AllCarsScreen';
import AvailableToday from '../screens/AvailableToday';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SpecsScreen"
        component={SpecsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DateTime"
        component={DateTimeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeLocation"
        component={HomeLocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllCars"
        component={AllCarsScreen}
        options={{headerShown: true, title: 'All Cars'}}
      />
      <Stack.Screen
        name="AvailableCars"
        component={AvailableToday}
        options={{headerShown: true, title: 'Available Cars Today'}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: '#005E54'},
        tabBarInactiveTintColor: '#7FAEA9',
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#005E54',
          },
          tabBarIcon: ({color, size}) => (
            <Foundation name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          // tabBarBadge: 3,
          // tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="compass-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  if (routeName === 'Home') {
    return 'flex';
  }
  return 'none';
};

export default TabNavigator;
