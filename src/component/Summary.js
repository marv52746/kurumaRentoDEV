import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GeoMapsUtils from '../hooks/useGeoMaps';
import {connect} from 'react-redux';

const Summary = ({handleClick, location, reservation}) => {
  const {distanceFromOrigin} = GeoMapsUtils();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <View style={[styles.alignCenter, styles.verticalPad20]}>
        <View>
          <Text style={[styles.text]}>Start</Text>
          <View style={styles.timeWrap}>
            <Text style={styles.date}>
              {`${reservation.startDate} - ${reservation.startTime}`}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text]}>Finish</Text>
          <View style={styles.timeWrap}>
            <Text style={styles.date}>
              {`${reservation.endDate} - ${reservation.endTime}`}
            </Text>
          </View>
        </View>
      </View>

      <Text style={[styles.text]}>Pick-up Station</Text>
      <TouchableOpacity
        onPress={handleClick}
        style={[styles.locationWrap, styles.alignCenter, styles.verticalM10]}>
        <Ionicons name="location-sharp" color={'#005E54'} size={30} />
        <Text style={styles.location}>{location ? location : null}</Text>
        <Text style={styles.kmStyle}>{distanceFromOrigin}</Text>
      </TouchableOpacity>

      <Text style={[styles.text, styles.mt10]}>Payment Options</Text>
      <View style={[styles.alignCenter, styles.startm10]}>
        <Image
          source={require('../../assets/images/gcash.png')}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={[styles.text, styles.m20]}>Gcash Name</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  reservation: state.utils.reservation,
});

export default connect(mapStateToProps)(Summary);

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005E54',
    paddingHorizontal: 20,
    paddingTop: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  timeWrap: {
    backgroundColor: '#fff',
    padding: 10,
    width: deviceWidth / 3,
    borderRadius: 10,
    paddingVertical: 10,
  },
  locationWrap: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  alignCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {height: 40, width: 40},
  m20: {marginLeft: 20},
  startm10: {justifyContent: 'flex-start', marginVertical: 10},
  mt10: {marginTop: 10},
  kmStyle: {fontSize: 16, textAlign: 'center', color: '#005E54'},
  location: {fontSize: 16, textAlign: 'center', color: '#005E54'},
  verticalM10: {marginVertical: 5},
  date: {
    fontSize: 16,
    textAlign: 'center',
    color: '#005D54',
  },
  verticalPad20: {paddingVertical: 15},
});
