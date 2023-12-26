import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const calculateHaversineDistance = (origin, destination) => {
  const R = 6371; // Earth's radius in kilometers

  const dLat = (destination.latitude - origin.latitude) * (Math.PI / 180);
  const dLon = (destination.longitude - origin.longitude) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(origin.latitude * (Math.PI / 180)) *
      Math.cos(destination.latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers

  return distance;
};

export default function GeoMapsUtils() {
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    // Call the function to get user location here
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setUserLocation({latitude, longitude});
            },
            error => {
              console.error('Error getting location: ', error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
          );
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (error) {
      console.error('Error requesting location permission: ', error);
    }
  };

  const ORIGIN_LOCATION = {
    latitude: 8 + 10 / 60 + 57.6 / 3600,
    longitude: 126 + 21 / 60 + 8.5 / 3600,
  };

  const distanceFromOrigin = calculateHaversineDistance(
    ORIGIN_LOCATION,
    userLocation,
  );

  // Round off to two decimal places and add the unit
  const roundedDistance = distanceFromOrigin.toFixed(2);
  const distanceWithUnit = `${roundedDistance} km`;

  return {userLocation, distanceFromOrigin: distanceWithUnit};
}
