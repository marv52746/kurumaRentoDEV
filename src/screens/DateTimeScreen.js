import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import BackButton from '../component/BackButton';
import BookBtn from '../component/BookBtn';
import BookDriver from '../component/BookDriver';
import Calendar from '../component/Calendar';
import PickUpTime from '../component/PickUpTime';
import ReturnTime from '../component/ReturnTime';

export default function DateTimeScreen({navigation, route}) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [formatDate, setformatDate] = useState({
    startDate: null,
    endDate: null,
  });

  const onDateChange = (date, type) => {
    if (type === 'END_DATE' && selectedStartDate && date >= selectedStartDate) {
      setSelectedEndDate(date);
    } else if (type === 'START_DATE') {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  useEffect(() => {
    setformatDate({
      startDate: formatDateString(selectedStartDate),
      endDate: formatDateString(selectedEndDate),
    });
  }, [selectedStartDate, selectedEndDate]);

  const formatDateString = inputDateString => {
    const inputDate = new Date(inputDateString);
    if (isNaN(inputDate)) {
      return null; // Invalid date string
    }
    const options = {month: 'short', day: 'numeric', year: 'numeric'};
    return inputDate.toLocaleDateString(undefined, options);
  };

  const handleBookBtn = () => {
    const currentDate = new Date();
    const endDate = new Date(selectedEndDate);

    if (endDate.getFullYear() < currentDate.getFullYear()) {
      Alert.alert('Please select a date range.');
    } else {
      navigation.navigate('Payment', formatDate);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Date & Time</Text>
        </View>
        <View style={styles.backBtnWrap}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
      </View>

      <View style={styles.contentStyle}>
        <BookDriver />
        <Calendar onDateChange={onDateChange} />
        <View style={styles.pickTime}>
          <PickUpTime />
          <ReturnTime />
        </View>
      </View>

      <View style={{}}>
        <BookBtn
          color={'#005E54'}
          selectedDates={{selectedStartDate, selectedEndDate}}
          onPress={handleBookBtn}
        />
      </View>
    </View>
  );
}

// const deviceWidth = Math.round(Dimensions.get('window').width);
// const deviceHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#E6EFEE'},
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#000',
  },
  backBtnWrap: {
    backgroundColor: '#fff',
    position: 'absolute',
    padding: 10,
    top: 15,
    left: 20,
    borderRadius: 25,
    borderColor: '#000',
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center',
  },
  alignCenterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    width: '70%',
  },
  horizontalRule: {
    borderBottomColor: '#B4BBBA',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  pickTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  contentStyle: {
    flex: 1,
    padding: 20,
  },
});
