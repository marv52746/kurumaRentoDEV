import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// const data = {
//         key : "Transmission",
//         value : "Automatic"
//     }

const CardSpecifics = ({item})=>{
    const iconName =(item)=>{
      switch (item.key) {
        case 'Transmission':
          return <FontAwesome5 name='car' color={'#7FAEA9'} size={30} />
        case 'Seats':
          return <MaterialCommunityIcons name='car-seat' color={'#7FAEA9'} size={30} />
        case 'Air Condition':
          return <MaterialCommunityIcons name='fan' color={'#7FAEA9'} size={30} />
        case 'Fuel Type':
          return <MaterialCommunityIcons name='fuel' color={'#7FAEA9'} size={30} />
        default:
          return <MaterialCommunityIcons name='fan' color={'#7FAEA9'} size={30} />
      }
    }
    return(
      <View style={[styles.specifics, styles.alignCenterRow]}>
          {iconName(item)}
          <View style={{marginLeft: 15}}>
            <Text style={styles.specificsText}>{item.key}</Text>
            <Text style={[styles.specificsText, {fontSize:13, color: '#DEFFFF'}]}>{item.value}</Text>
          </View>
      </View>
    )
}

const CarSpecificationSingle = ({data}) => {
  return (

    <View style={styles.row}>
        <CardSpecifics item={data}/>
    </View>

  )
}

export default CarSpecificationSingle

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    specificsText:{
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },
    specifics:{
        backgroundColor: '#005E54',
        padding: 10,
        paddingVertical: 20,
        borderRadius: 10,
        marginVertical: 5,
        width: deviceWidth/2 -40
        // width: 100
    },
      alignCenterRow:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      title: {
        fontFamily: 'Poppins-Light',
        fontSize: 18,
      },

})