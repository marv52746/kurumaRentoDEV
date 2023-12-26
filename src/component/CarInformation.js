import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const data = [
    {
        key : "Max Power",
        value : "720 W"
    },
    {
        key : "Top Speed",
        value : "120 km/hr"
    },
    {
        key : "Fuel Type",
        value : "Gasoline"
    },
]

const CardSpecifics = ({item})=>{
    return(
        <View style={[styles.specifics, styles.alignCenterVertical]}>
            <Text style={styles.specificsText}>{item.key}</Text>
            <Text style={styles.specificsText}>{item.value}</Text>
        </View>
    )
}

export default function CarInformation () {
  return (
    <View>
        <Text style={styles.title}>Car Information</Text>
        <FlatList
            data={data}
            renderItem={({item})=>(
              <CardSpecifics 
                item={item}
              />
            )}
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false} // Set this prop to hide the scroll bar
            horizontal
        />
    </View>
  )
}



const styles = StyleSheet.create({
    specificsText:{
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },
    specifics:{
        backgroundColor: '#005E54',
        padding: 20,
        borderRadius: 10,
        margin: 10
    },
      alignCenterVertical:{
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'center'
      },
      alignCenterRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
      },

})