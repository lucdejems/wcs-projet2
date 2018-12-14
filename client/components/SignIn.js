import React, { Component } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import PropTypes from 'prop-types';
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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
        Alert.alert('Connexion effectué');
        history.push('/list');
      })
      .catch(() => {});
  };

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Text style={styles.text}>Se connecter</Text>
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
        <Link to="/">
          <Text style={styles.text}>
            {` 
          S'inscrire 
          `}
          </Text>
        </Link>
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

SignIn.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(SignIn);
