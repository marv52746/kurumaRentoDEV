import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{
          flex: 1,
          justifyContent:'center',
          alignItems: 'center'
      }}>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('Onboarding') }
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
            Go back to Onboarding
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})