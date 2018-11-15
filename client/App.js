import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonCreateArticle } from './components';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <ButtonCreateArticle />
  </View>
);

export default App;
