import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PickUpTime from '../component/PickUpTime';

const NotificationScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <PickUpTime />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
