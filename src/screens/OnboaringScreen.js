import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OnboaringScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }}>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Login') }
        style={{
            backgroundColor: 'blue',
            padding: 10,
        }}
      >
        <Text 
            style={{
                color: '#fff'
            }}
        >
          Lets Get Started!
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default OnboaringScreen

const styles = StyleSheet.create({})