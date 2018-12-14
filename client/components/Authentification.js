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
      name: '',
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
        Alert.alert('Connexion échoué');
      });
  };

  signup = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.updateProfile();
        Alert.alert('Inscription effectué');
        this.login();
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  updateProfile = () => {
    const user = firebase.auth().currentUser;
    const { name } = this.state;
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {})
      .catch(() => {});
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <View>
        <Text style={styles.text}>
          {`
        S'inscrire 
        `}
        </Text>
        <TextInput
          placeholder="Prénom"
          style={styles.input}
          onChangeText={newName => this.setState({ name: newName })}
          value={name}
        />
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
        <Text>
          Déja inscrit ?
          <Link to="/login">
            <Text style={styles.linkLogin}>Se connecter</Text>
          </Link>
        </Text>
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
  history: PropTypes.string.isRequired,
};

export default withRouter(Authentification);
