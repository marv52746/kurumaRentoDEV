import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BackButton from '../component/BackButton';
import BookBtn from '../component/BookBtn';
import BookDriver from '../component/BookDriver';
import Calendar from '../component/Calendar';
import PickUpTime from '../component/PickUpTime';
import ReturnTime from '../component/ReturnTime';
import {connect} from 'react-redux';

const DateTimeScreen = ({navigation, route, reservation}) => {
  const handleBookBtn = () => {
    // const currentDate = new Date();
    // const endDate = new Date(reservation.endDate);
    if (!reservation.endDate) {
      Alert.alert('Please select a date range.');
    } else if (!reservation.startTime || !reservation.endTime) {
      Alert.alert('Please select time.');
    } else {
      navigation.navigate('Payment');
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
        <Calendar />
        <View style={styles.pickTime}>
          <PickUpTime />
          <ReturnTime />
        </View>
      </View>

      <View style={{}}>
        <BookBtn color={'#005E54'} onPress={handleBookBtn} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  reservation: state.utils.reservation,
});

export default connect(mapStateToProps)(DateTimeScreen);

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
