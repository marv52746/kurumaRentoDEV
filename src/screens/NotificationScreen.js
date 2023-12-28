import React from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Text, View} from 'react-native';

const NotificationScreen = ({isAuthenticated, user}) => {
  return (
    <View style={styles.alignCenter}>
      <Text>Is Authenticated: {isAuthenticated.toString()}</Text>
      <Text>User: {user.username}</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(NotificationScreen);

const styles = StyleSheet.create({
  alignCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
