import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const requestLocationPermission = async () => {
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
        console.log('Location permission granted');
        return true;
      } else {
        console.log('Location permission denied');
        return false;
      }
    } else {
      // For iOS, permissions are requested at runtime
      return true;
    }
  } catch (error) {
    console.error('Error requesting location permission: ', error);
    return false;
  }
};

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        resolve({latitude, longitude});
      },
      error => {
        console.error('Error getting location: ', error);
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  });
};

export const getLocation = async () => {
  const hasLocationPermission = await requestLocationPermission();
  if (hasLocationPermission) {
    return getUserLocation();
  } else {
    console.warn('Location permission not granted');
    return null; // or handle it according to your needs
  }
};
