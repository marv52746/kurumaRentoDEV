import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {enableLatestRenderer} from 'react-native-maps';
import AppStack from './src/navigation/AppStack';

export default function App() {
  // enableLatestRenderer();
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
