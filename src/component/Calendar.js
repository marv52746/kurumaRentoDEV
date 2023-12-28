// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

// import React in our code
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import CalendarPicker from 'react-native-calendar-picker';
import {connect} from 'react-redux';
import {updateReservation} from '../services/utilsSlice';
import {formatDate} from '../global/utilities';

const Calendar = ({dispatch, reservation}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleDateChange = (date, type) => {
    if (type === 'END_DATE' && selectedStartDate && date >= selectedStartDate) {
      setSelectedEndDate(date);
    } else if (type === 'START_DATE') {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  useEffect(() => {
    const payload = {
      ...reservation,
      endDate: formatDate(selectedEndDate),
      startDate: formatDate(selectedStartDate),
    };
    dispatch(updateReservation(payload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStartDate, selectedEndDate]);

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
        onDateChange={handleDateChange}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  reservation: state.utils.reservation,
});

export default connect(mapStateToProps)(Calendar);

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
