import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RenterDetails = () => {
  return (
    <View style={styles.alignCenterRow}>
      <View style={{...styles.alignCenterRow, justifyContent: 'flex-start'}}>
        <ImageBackground
          source={require('../../assets/images/profile.jpg')}
          style={{width: 50, height: 50}}
          imageStyle={{borderRadius: 25}}
        />
        <View style={styles.renterDetails}>
          <Text style={styles.renterText}>John Samosa</Text>
          <Text style={{...styles.renterText, fontSize: 16}}>Renter</Text>
        </View>
      </View>
      <View style={{...styles.alignCenterRow, justifyContent: 'flex-end'}}>
        <FontAwesome
          style={{marginRight: 20}}
          name="phone"
          color="#000"
          size={30}
        />
        <Ionicons style={{color: '#000'}} name="chatbox-ellipses" size={30} />
      </View>
    </View>
  );
};

export default RenterDetails;

const styles = StyleSheet.create({
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

  renterDetails: {
    marginLeft: 20,
  },
  renterText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#000',
  },
});
