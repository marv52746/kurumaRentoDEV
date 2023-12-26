import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.alignCenter} onPress={onPress}>
      <Feather name="arrow-left" color="#000" size={30} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center',
  },
});
