// LoginComponent.js
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TextInput, Button} from 'react-native';
import {login} from '../services/authSlice'; // Import the login action

const LoginComponent = ({login}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here and dispatch the login action
    const user = {username, password}; // Example, replace with actual authentication logic

    login(user);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default connect(null, {login})(LoginComponent);
