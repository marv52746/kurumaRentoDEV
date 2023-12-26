import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder="Search for cars" />
      <TouchableOpacity>
        <Ionicons style={styles.micIcon} name="search-outline" size={25} />
      </TouchableOpacity>
    </View>
  );
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: deviceWidth - 30,
  },
  inputText: {
    fontSize: 16,
    color: '#7D7D7D',
    fontFamily: 'Poppins-Regular',
    width: '85%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {},
  micIcon: {
    backgroundColor: '#005E54',
    color: '#fff',
    padding: 10,
    borderRadius: 15,
    margin: 0,
  },
});
