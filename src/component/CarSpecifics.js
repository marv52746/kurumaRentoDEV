import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CardSpecifics = ({item}) => {
  const iconName = icon => {
    switch (icon.key) {
      case 'Transmission':
        return <FontAwesome5 name="car" color={'#7FAEA9'} size={30} />;
      case 'Seats':
        return (
          <MaterialCommunityIcons name="car-seat" color={'#7FAEA9'} size={30} />
        );
      case 'Air Condition':
        return (
          <MaterialCommunityIcons name="fan" color={'#7FAEA9'} size={30} />
        );
      case 'Fuel Type':
        return (
          <MaterialCommunityIcons name="fuel" color={'#7FAEA9'} size={30} />
        );
      default:
        return (
          <MaterialCommunityIcons name="fan" color={'#7FAEA9'} size={30} />
        );
    }
  };
  return (
    <View style={[styles.specifics, styles.alignCenterRow]}>
      {iconName(item)}
      <View style={styles.ml15}>
        <Text style={styles.specificsText}>{item.key}</Text>
        <Text style={[styles.specificsText, styles.font13]}>{item.value}</Text>
      </View>
    </View>
  );
};

const CarSpecifics = ({data}) => {
  return (
    <View style={styles.mb10}>
      <Text style={styles.title}>Car Specification</Text>
      <View style={styles.row}>
        {data.map((item, index) => (
          <CardSpecifics key={index} item={item} />
        ))}
      </View>
    </View>
  );
};

export default CarSpecifics;

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  font13: {fontSize: 13, color: '#DEFFFF'},
  ml15: {marginLeft: 15},
  mb10: {marginBottom: 10},
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specificsText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  specifics: {
    backgroundColor: '#005E54',
    padding: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 5,
    width: deviceWidth / 2 - 25,
    // width: 100
  },
  alignCenterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#000',
  },
});
