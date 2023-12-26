import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../component/BackButton';

import {specifications} from '../data/index';
import CarSpecificationSingle from '../component/CarSpecificationSingle';
import Summary from '../component/Summary';
import Maps from '../component/Maps';

const PaymentScreen = ({navigation, route}) => {
  const [locationNameFromMap, setLocationNameFromMap] = useState(null);

  const {startDate, endDate} = route?.params;

  const handleLocationNameChange = newLocationName => {
    // console.log(locationNameFromMap);
    setLocationNameFromMap(newLocationName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backBtnWrap}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <ScrollView>
        <View style={styles.subContainer}>
          <StatusBar />
          <TouchableOpacity onPress={() => navigation.navigate('HomeLocation')}>
            <Maps onLocationNameChange={handleLocationNameChange} />
          </TouchableOpacity>
        </View>

        <View style={[styles.borderStyles, styles.subBg]}>
          <View style={[styles.alignCenterRow, styles.padBtm]}>
            <Text style={styles.title}>Mercedes Benz 2022 CLS Coupe</Text>
            <CarSpecificationSingle data={specifications[0]} />
          </View>

          {locationNameFromMap ? (
            <Summary
              startDate={startDate}
              endDate={endDate}
              location={locationNameFromMap}
            />
          ) : (
            <Summary startDate={startDate} endDate={endDate} location={''} />
          )}
        </View>
      </ScrollView>

      <View style={styles.pad10}>
        <TouchableOpacity style={[styles.bookNowBtn]} onPress={() => {}}>
          <Text style={styles.btnStyles}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#005B52'},
  subContainer: {height: 250, flex: 1},
  subBg: {backgroundColor: '#E6EFEE', flex: 1},
  padBtm: {paddingHorizontal: 20, paddingBottom: 10},
  pad10: {padding: 10},
  btnStyles: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  backBtnWrap: {
    backgroundColor: '#fff',
    position: 'absolute',
    padding: 10,
    top: 20,
    left: 20,
    borderRadius: 25,
    borderColor: '#000',
    zIndex: 100,
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
    flex: 1, // Adjusted flex property
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    width: deviceWidth / 2,
    color: '#000',
  },
  horizontalRule: {
    borderBottomColor: '#B4BBBA',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  borderStyles: {
    paddingTop: 40,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    flex: 1, // Adjusted flex property
  },
  bookNowBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEAD07',
    paddingVertical: 10,
    borderRadius: 10,
    width: deviceWidth - 20,
  },
});
