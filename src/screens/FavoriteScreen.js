import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateReservation} from '../services/utilsSlice';

const FavoriteScreen = ({dispatch, reservation}) => {
  const handleUpdateUtilityData = () => {
    const newData = {
      startDateTime: 'startDateTime',
      endDateTime: 'endDateTime',
    };
    // Dispatch the action to update utility data
    dispatch(updateReservation(newData));
  };
  return (
    <View style={styles.alignCenter}>
      <Text>FavoriteScreen</Text>
      <Text>{reservation ? reservation.startDateTime : null}</Text>
      <Text>{reservation ? reservation.endDateTime : null}</Text>
      <TouchableOpacity onPress={handleUpdateUtilityData}>
        <Text>Update Reservation</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  reservation: state.utils.reservation,
});

export default connect(mapStateToProps)(FavoriteScreen);

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
