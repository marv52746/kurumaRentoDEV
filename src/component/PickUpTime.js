import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {connect} from 'react-redux';
import {updateReservation} from '../services/utilsSlice';
import {formatTime} from '../global/utilities';

const PickUpTime = ({dispatch, reservation}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.pickTimeText}>Pick-up Time</Text>
      <TouchableOpacity style={styles.timeWrap} onPress={() => setOpen(true)}>
        <Text style={styles.timeText}>{date ? formatTime(date) : null}</Text>
        <SimpleLineIcons name="arrow-down" color="#005E54" size={15} />
      </TouchableOpacity>

      <DatePicker
        modal
        mode="time"
        open={open}
        date={date || new Date()}
        onConfirm={dateTime => {
          const payload = {
            ...reservation,
            startTime: formatTime(dateTime), // Convert Date to string,
          };
          dispatch(updateReservation(payload));
          setOpen(false);
          setDate(dateTime);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  reservation: state.utils.reservation,
});

export default connect(mapStateToProps)(PickUpTime);

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {},
  pickTimeText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  timeWrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: deviceWidth / 3,
  },
  timeText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#005E54',
  },
});
