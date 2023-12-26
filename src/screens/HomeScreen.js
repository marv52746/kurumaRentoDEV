import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';

import SearchBar from '../component/SearchBar';
import CarCard from '../component/CarCard';
import CarLogoCard from '../component/CarLogoCard';
import {cars, carLogo} from '../data/index';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#005E54'} barStyle={'light-content'} />
      <ScrollView>
        <View style={styles.subContainer}>
          <View style={styles.header}>
            <Text style={styles.name}>Hello John Doe</Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={require('../../assets/images/profile.jpg')}
                style={styles.imageDim}
                imageStyle={styles.radiusBorders}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.w300}>
            <Text style={styles.headerText}>Find your favorite vehicle</Text>
          </View>
          <View style={styles.searchWrap}>
            <SearchBar />
          </View>
        </View>

        <View style={styles.topSectionWrap}>
          <View style={styles.allWrap}>
            <Text style={styles.allCarsText}>Top Brands</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>

          <FlatList
            data={carLogo}
            renderItem={({item}) => <CarLogoCard item={item} />}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false} // Set this prop to hide the scroll bar
            horizontal
          />
        </View>

        <View style={styles.bottomSectionWrap}>
          <View style={styles.allWrap}>
            <Text style={styles.allCarsText}>Available Near You</Text>
            <Text style={styles.seeAllText}>See All</Text>
          </View>

          <FlatList
            data={cars}
            renderItem={({item}) => (
              <CarCard
                item={item}
                onPress={() => navigation.navigate('SpecsScreen', {car: item})}
              />
            )}
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false} // Set this prop to hide the scroll bar
            horizontal
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EFEE',
  },
  subContainer: {
    // paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#005E54',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 40,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 10,
  },
  name: {fontSize: 18, color: '#fff'},
  imageDim: {width: 40, height: 40},
  radiusBorders: {borderRadius: 25},
  w300: {width: deviceWidth - 50},
  headerText: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Poppins-Light',
  },
  searchWrap: {
    position: 'absolute',
    bottom: -20,
    left: 15,
  },
  topSectionWrap: {
    paddingTop: 40,
  },
  bottomSectionWrap: {
    paddingTop: 10,
  },
  allWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  allCarsText: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  seeAllText: {
    color: '#005E54',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});
