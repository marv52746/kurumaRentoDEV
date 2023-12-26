import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const PickUpTime = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedTime(date)
    hideDatePicker();
  };

  const formatTime = (time) => {
    return time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pickTimeText}>Return Time</Text>
      <TouchableOpacity style={styles.timeWrap} onPress={showDatePicker}>
        <Text style={styles.timeText}>{selectedTime ? formatTime(selectedTime) : null}</Text>
        <SimpleLineIcons name='arrow-down' color="#000" size={15} />
      </TouchableOpacity>
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={new Date()}
        is24Hour={false}
      />
    </View>
  );
};

export default PickUpTime;

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  container:{
    
  },
  pickTimeText:{
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'right'
  },
  timeWrap:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    width: deviceWidth/3
  },
  timeText:{
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },

})