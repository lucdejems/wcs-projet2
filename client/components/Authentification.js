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
  linkLogin: {
    color: '#3358FF',
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
    const { history } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/list');
      })
      .catch(() => {
        Alert.alert('Connexion échouée');
      });
  };

  signup = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Inscription effectuée');
        this.login();
      })
      .catch(() => {
        Alert.alert('Veuillez remplir les champs');
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
        <Text>Déja inscrit ?</Text>
        <Link to="/login">
          <Text style={styles.linkLogin}>Se connecter</Text>
        </Link>
        <Button
          onPress={this.signup}
          title="Continuer"
          color="#3358FF"
          accessibilityLabel="Valid Form Sign in"
        />
      </View>
    );
  }
}

Authentification.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Authentification);
