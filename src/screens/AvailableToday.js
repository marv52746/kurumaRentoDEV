import {FlatList, SafeAreaView} from 'react-native';
import {cars} from '../data/index';
import React from 'react';
import CarCard from '../component/CarCard';

const AvailableToday = ({navigation}) => {
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

export default AvailableToday;

// const styles = StyleSheet.create({});
