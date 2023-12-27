import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const BookDriver = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, styles.shadowContainer]}>
      <View>
        <Text style={styles.driverTextStyles}>Book Our Driver</Text>
        <Text style={[styles.driverTextStyles, styles.subDriverTextStyles]}>
          Don't have a driver? You can book ours
        </Text>
      </View>
      <View>
        <Switch
          trackColor={{false: '#D9D9D9', true: '#7FAEA9'}}
          thumbColor={isEnabled ? '#005E54' : '#f4f3f4'}
          ios_backgroundColor="#D9D9D9"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{transform: [{scaleX: 1.3}, {scaleY: 1.3}]}} // Adjust the scale factor as needed
        />
      </View>
    </View>
  );
};

export default BookDriver;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  shadowContainer: {
    // Shadow styles for both iOS and Android
    shadowColor: '#000',
    shadowOffset: {width: -8, height: 21},
    shadowOpacity: 0.59,
    shadowRadius: 36,
    elevation: 8,
  },
  driverTextStyles: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  subDriverTextStyles: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
