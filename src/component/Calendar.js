// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

// import React in our code
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import CalendarPicker from 'react-native-calendar-picker';

export default function Calendar({onDateChange}) {
  return (
    <View style={[styles.container, styles.shadowContainer]}>
      <CalendarPicker
        previousComponent={
          <Feather
            name="arrow-left"
            color="#000"
            size={30}
            style={[styles.nextPrevBtn, styles.shadowContainer, styles.ml20]}
          />
        }
        nextComponent={
          <Feather
            name="arrow-right"
            color="#000"
            size={30}
            style={[styles.nextPrevBtn, styles.shadowContainer, styles.mr20]}
          />
        }
        allowRangeSelection={true}
        minDate={new Date()}
        maxDate={new Date(2050, 6, 3)}
        selectedDayColor="#005E54"
        selectedDayTextColor="#fff"
        scaleFactor={375}
        onDateChange={onDateChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ml20: {marginLeft: 20},
  mr20: {marginRight: 20},
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 25,
    paddingVertical: 10,
  },
  shadowContainer: {
    // Shadow styles for both iOS and Android
    shadowColor: '#000',
    shadowOffset: {width: -8, height: 80},
    shadowOpacity: 0.7,
    shadowRadius: 50,
    elevation: 8,
  },
  nextPrevBtn: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
});
