import {FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {cars} from '../data/index';
import CarCard from '../component/CarCard';

const AllCarsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={cars}
        renderItem={({item}) => (
          <CarCard
            item={item}
            onPress={() => navigation.navigate('SpecsScreen', {car: item})}
          />
        )}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default AllCarsScreen;

// const styles = StyleSheet.create({});
