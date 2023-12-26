import React, {useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Dimensions, Alert} from 'react-native';
import {getLocation} from '../hooks/useLocation';
import {LOCATION_API} from '@env';

const Maps = ({onLocationNameChange}) => {
  useEffect(() => {
    getLocation()
      .then(({latitude, longitude}) => {
        // Now you can use latitude and longitude as needed
      })
      .catch(error => {
        console.error('Error getting location: ', error);
      });

    const latitude = 8 + 10 / 60 + 57.6 / 3600;
    const longitude = 126 + 21 / 60 + 8.5 / 3600;
    const apiKEY = LOCATION_API;
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        latitude +
        ',' +
        longitude +
        '&key=' +
        apiKEY,
    )
      .then(response => response.json())
      .then(responseJson => {
        onLocationNameChange(responseJson.results[3].formatted_address);
      });
  }, [onLocationNameChange]);

  const INITIAL_REGION = {
    latitude: 8 + 10 / 60 + 57.6 / 3600,
    longitude: 126 + 21 / 60 + 8.5 / 3600,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const onMarkerSelect = () => {
    Alert.alert('Las Piñas Store');
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        // showsMyLocationButton={true}
        region={INITIAL_REGION}
        style={styles.map}>
        <Marker
          pinColor="red"
          coordinate={INITIAL_REGION}
          onPress={onMarkerSelect}
        />
      </MapView>
    </View>
  );
};

export default Maps;

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  map: {
    width: deviceWidth,
    height: deviceHeight,
  },
});
