import React from 'react';

import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import store from './common/store';

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
  <Provider store={store}>
    <View style={styles.container}>
      <ButtonCreateArticle />
    </View>
  </Provider>
);

export default App;
