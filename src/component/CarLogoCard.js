import { TouchableOpacity, Image,StyleSheet,Dimensions } from 'react-native'
import React from 'react'

export default function CarLogoCard ({item, handlePress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Image 
            source={item?.imageUrl} 
            resizeMode='contain'
            style={styles.imageStyle}
        />
    </TouchableOpacity>
  )
}

const radius = 20
const styles = StyleSheet.create({
    container:{
      width: 90,
      height: 90,
      backgroundColor: '#fff',
      justifyContent: 'center',
      borderRadius: radius,
      margin: 15,
      flexDirection: 'column',

      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.6,
      elevation: 9
    },
    imageStyle:{
        height: "60%",
        width: "60%",
        alignSelf: 'center',
    }
})