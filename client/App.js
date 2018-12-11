import React from 'react';
import { StyleSheet, View } from 'react-native';

const firebase = require('firebase');

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
  apiKey: 'AIzaSyDmIbVF8Fwy78tZjxmeootr7bMIDMfMHqc',
  authDomain: 'wcs-projet-2.firebaseapp.com',
  databaseURL: 'https://wcs-projet-2.firebaseio.com',
  projectId: 'wcs-projet-2',
  storageBucket: 'wcs-projet-2.appspot.com',
  messagingSenderId: '747601444266',
};
firebase.initializeApp(config);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => <View style={styles.container} />;

export default App;
