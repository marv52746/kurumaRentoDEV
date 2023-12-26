import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CarCard({navigation, route, item, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image
          source={item?.imageUrl}
          resizeMode="cover"
          style={styles.carImg}
        />
      </View>
      <View style={styles.btnSection}>
        <Text style={[styles.carName, styles.textColor]}>{item.name}</Text>
        <Text style={styles.textColor}>
          <Ionicons style={styles.iconColor} name="star" size={20} /> 5.0{' '}
        </Text>
      </View>
      <View style={styles.btnSection}>
        <Text style={styles.textColor}>Automatic</Text>
        <Text style={styles.textColor}>$540/day</Text>
      </View>
    </TouchableOpacity>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
  iconColor: {color: '#EEAD07'},
  textColor: {
    color: '#000',
  },
  container: {
    width: deviceWidth - 30,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRadius: radius,
    margin: 15,
    flexDirection: 'column',
    paddingBottom: 15,

    shadowColor: '#000',
    shadowOffset: {width: -8, height: 21},
    shadowOpacity: 0.59,
    shadowRadius: 36,
    elevation: 8,
  },
  carImg: {
    borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
    width: '100%',
    height: 220,
  },
  carName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginVertical: 0,
  },
});
