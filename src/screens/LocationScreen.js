import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Maps from '../component/Maps'

const LocationScreen = () => {
  const [locationNameFromMap, setLocationNameFromMap] = useState(null);

  return (
    <View>
      <Maps onLocationNameChange={setLocationNameFromMap}/>
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})