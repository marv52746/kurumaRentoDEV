import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Summary = ({location, startDate, endDate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>

      <View style={[styles.alignCenter, styles.verticalPad20]}>
        <View>
          <Text style={[styles.text]}>Start</Text>
          <View style={styles.timeWrap}>
            <Text style={styles.date}>{startDate}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.text]}>Finish</Text>
          <View style={styles.timeWrap}>
            <Text style={styles.date}>{endDate}</Text>
          </View>
        </View>
      </View>

      <Text style={[styles.text]}>Pick-up Station</Text>
      <View
        style={[styles.locationWrap, styles.alignCenter, styles.verticalM10]}>
        <Ionicons name="location-sharp" color={'#005E54'} size={30} />
        <Text style={styles.location}>{location ? location : null}</Text>
        <Text style={styles.kmStyle}>20km</Text>
      </View>

      <Text style={[styles.text, styles.mt10]}>Payment Options</Text>
      <View style={[styles.alignCenter, styles.startm10]}>
        <Image
          source={require('../../assets/images/gcash.png')}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={[styles.text, styles.m20]}>
          University of Ghana, Legon
        </Text>
      </View>
    </View>
  );
};

export default Summary;

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#005E54',
    paddingHorizontal: 20,
    paddingTop: 40,
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
    paddingVertical: 15,
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
  verticalM10: {marginVertical: 10},
  date: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  verticalPad20: {paddingVertical: 20},
});
