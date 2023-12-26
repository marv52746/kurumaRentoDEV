import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BookBtn = ({color, title, onPress, selectedDates}) => {
  const formatDateString = inputDateString => {
    const inputDate = new Date(inputDateString);
    if (isNaN(inputDate)) {
      return null; // Invalid date string
    }
    const options = {month: 'short', day: 'numeric'};
    return inputDate.toLocaleDateString(undefined, options);
  };

  const printDate = selectedDate => {
    const start = selectedDate?.selectedStartDate
      ? formatDateString(selectedDate?.selectedStartDate)
      : '';
    const end = selectedDate?.selectedEndDate
      ? formatDateString(selectedDate?.selectedEndDate)
      : '';
    if (start && !end) {
      return `${start}`;
    } else if (start && end) {
      return `${start} - ${end}`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.alignCenter}>
          {!selectedDates?.selectedStartDate ? (
            <Text style={styles.colorDark}>Rate</Text>
          ) : (
            <Text style={styles.colorDark}>{printDate(selectedDates)}</Text>
          )}
          <Text style={styles.rateStyles}>$1200 /day</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.bookNowBtn, {backgroundColor: color}]}
            onPress={onPress}>
            <Text style={styles.btnText}>{title ? title : 'Book Now'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookBtn;

const deviceWidth = Math.round(Dimensions.get('window').width);
// const deviceheight = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  colorDark: {
    color: '#000',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alignCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAlign: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonWidth: {
    width: deviceWidth / 2 - 20,
  },
  bookNowBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#005E54',
    paddingVertical: 10,
    borderRadius: 10,
    width: deviceWidth / 2 - 20,
  },
  rateStyles: {
    color: '#005E54',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
