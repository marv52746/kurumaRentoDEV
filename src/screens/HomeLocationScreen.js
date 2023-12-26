import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Maps from '../component/Maps';
import BackButton from '../component/BackButton';

const HomeLocationScreen = ({navigation, route}) => {
    const [locationNameFromMap, setLocationNameFromMap] = useState(null);

    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#005B52'}}>
            <View style={{height: 250, flex: 1}}>
                <Maps onLocationNameChange={setLocationNameFromMap}/>
                <View style={styles.backBtnWrap}>
                    <BackButton onPress={()=>navigation.goBack()} />
                </View>
            </View>
        </SafeAreaView> 
    )
}

export default HomeLocationScreen

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  backBtnWrap:{
    backgroundColor: "#fff",
    position: 'absolute',
    padding: 10,
    top: 50,
    left: 20,
    borderRadius:25,
    borderColor: '#000'
  },
  alignCenter:{
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'center'
  },
  alignCenterRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1, // Adjusted flex property
  },
})