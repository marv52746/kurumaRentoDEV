import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.bgColor}>
        <ImageBackground
          source={require('../../assets/images/menu-bg.jpg')}
          style={styles.p20}>
          <Image
            source={require('../../assets/images/profile.jpg')}
            style={styles.imageStyles}
          />
          <Text style={styles.name}>John Doe</Text>
          <View style={styles.row}>
            <Text style={styles.coins}>280 coins</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={styles.drawerWrap}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.btnWrap}>
        <TouchableOpacity onPress={() => {}} style={styles.verticalPad}>
          <View style={styles.rowCenter}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={styles.btnText}>Tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.verticalPad}>
          <View style={styles.rowCenter}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.signOut}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {flex: 1},
  bgColor: {backgroundColor: '#8200d6'},
  p20: {padding: 20},
  imageStyles: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {color: '#fff', fontSize: 18},
  row: {flexDirection: 'row'},
  coins: {color: '#fff', marginRight: 5},
  drawerWrap: {flex: 1, backgroundColor: '#fff', paddingTop: 10},
  btnWrap: {padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'},
  verticalPad: {paddingVertical: 15},
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  btnText: {fontSize: 15, marginLeft: 5},
  signOut: {fontSize: 15, marginLeft: 5},
});
