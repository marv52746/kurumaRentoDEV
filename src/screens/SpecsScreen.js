import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../component/BackButton';
import RenterDetails from '../component/RenterDetails';
import CarSpecifics from '../component/CarSpecifics';
import BookBtn from '../component/BookBtn';
import {specifications} from '../data/index';

const SpecsScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={route.params?.car.imageUrl}
          style={styles.imageStyle}
          resizeMode="cover"
        />
        {/* Back Button */}
        <View style={styles.backBtnWrap}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
      </View>

      <ScrollView style={styles.subContainer}>
        <View style={styles.alignCenterRow}>
          <Text style={[styles.title, styles.colorDark]}>
            {route.params?.car.name}
          </Text>
          <FontAwesome
            style={styles.mr20}
            name="heart"
            color="#005C52"
            size={30}
          />
        </View>
        <View style={styles.flexStartRow}>
          <Text style={[styles.mr5, styles.colorDark]}> 5.0 </Text>
          <Ionicons style={styles.iconColor} name="star" size={20} />
        </View>

        <View style={styles.horizontalRule} />
        <RenterDetails />
        <View style={styles.horizontalRule} />

        <CarSpecifics data={specifications ? specifications : []} />
      </ScrollView>
      <BookBtn
        color={'#005E54'}
        onPress={() => navigation.navigate('DateTime')}
      />
    </SafeAreaView>
  );
};

export default SpecsScreen;

const radius = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EFEE',
  },
  subContainer: {
    padding: 20,
    // marginBottom: 60,
    // paddingBottom: 100,
  },
  alignCenterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mr20: {marginRight: 20},
  mr5: {marginRight: 5},
  iconColor: {color: '#EEAD07'},
  flexStartRow: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: 300,
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius,
  },
  backBtnWrap: {
    backgroundColor: '#fff',
    position: 'absolute',
    padding: 10,
    top: 20,
    left: 20,
    borderRadius: 25,
    borderColor: '#000',
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center',
  },

  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    width: '70%',
  },
  colorDark: {
    color: '#000',
  },
  horizontalRule: {
    borderBottomColor: '#B4BBBA',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
