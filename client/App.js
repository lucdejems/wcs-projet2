import React from 'react';
import { StyleSheet, View } from 'react-native';
import Authentification from './components/Authentification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyDmIbVF8Fwy78tZjxmeootr7bMIDMfMHqc',
  authDomain: 'wcs-projet-2.firebaseapp.com',
  databaseURL: 'https://wcs-projet-2.firebaseio.com',
  projectId: 'wcs-projet-2',
  storageBucket: 'wcs-projet-2.appspot.com',
  messagingSenderId: '747601444266',
};
firebase.initializeApp(config);

const App = () => (
  <View style={styles.container}>
    <Authentification />
  </View>
);

export default App;
