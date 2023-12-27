import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const data = {
//         key : "Transmission",
//         value : "Automatic"
//     }

const CardSpecifics = ({item}) => {
  const iconName = iconItem => {
    switch (iconItem.key) {
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
      <Text style={[styles.specificsText]}>{item.value}</Text>
    </View>
  );
};

const CarSpecificationSingle = ({data}) => {
  return (
    <View style={styles.row}>
      <CardSpecifics item={data} />
    </View>
  );
};

export default CarSpecificationSingle;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specificsText: {
    color: '#DEFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  specifics: {
    backgroundColor: '#005E54',
    padding: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  alignCenterRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
  },
});
