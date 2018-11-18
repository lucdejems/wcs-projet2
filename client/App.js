import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonCreateArticle } from './components';

import ArticleList from './components/ArticleList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  state = { articles: [] };

  componentDidMount() {
    fetch('https://wcs-projet2.herokuapp.com/articles')
      .then(response => response.json())
      .then(response => {
        this.setState({ articles: response });
      });
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <View style={styles.container}>
        <ArticleList articles={articles} />
        <ButtonCreateArticle />
      </View>
    );
  }
}

export default App;
