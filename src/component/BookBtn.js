import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const BookBtn = ({color, title, onPress, reservation}) => {
  const printDate = () => {
    const start = reservation.startDate;
    const end = reservation.endDate;
    if (start && !end) {
      return `${start}`;
    } else {
      return `${start} - ${end}`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.alignCenter}>
          {!reservation?.startDate ? (
            <Text style={styles.colorDark}>Rate</Text>
          ) : (
            <Text style={styles.colorDark}>{printDate()}</Text>
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

// export default BookBtn;

const mapStateToProps = state => ({
  reservation: state.utils.reservation,
});

export default connect(mapStateToProps)(BookBtn);

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
    alignSelf: 'flex-start',
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
