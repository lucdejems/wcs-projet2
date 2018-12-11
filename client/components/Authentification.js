import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  text: {
    color: '#3358FF',
    fontSize: 20,
  },
  input: {
    padding: 10,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 4,
  },
});

class Authentification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(() => {
        Alert.alert('Beug');
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Text style={styles.text}>
          {`
        S'inscrire 
`}
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={newEmail => this.setState({ email: newEmail })}
          value={email}
        />
        <TextInput
          placeholder="Mot de passe"
          style={styles.input}
          onChangeText={newPassword => this.setState({ password: newPassword })}
          value={password}
        />
        <Button
          onPress={this.login}
          title="Continuer"
          color="#3358FF"
          accessibilityLabel="Valid Form Sign in"
        />
      </View>
    );
  }
}

export default Authentification;
