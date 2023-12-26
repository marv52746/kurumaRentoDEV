import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.searchIcon}
        name="search-outline"
        size={30}
        color="#7D7D7D"
      />
      <TextInput style={styles.inputText} placeholder="Search for coffee" />
      <TouchableOpacity>
        <Feather style={styles.micIcon} name="mic" size={25} />
      </TouchableOpacity>
    </View>
  );
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: deviceWidth - 30,
  },
  inputText: {
    fontSize: 16,
    color: '#7D7D7D',
    fontFamily: 'Poppins-Regular',
    width: '80%',
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
