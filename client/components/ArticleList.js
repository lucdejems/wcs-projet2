import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import ArticleThumbnail from './ArticleThumbnail';

const articleUrlExtractor = article => article.url;

const styles = StyleSheet.create({
  noArticlesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArticleList = ({ articles }) =>
  articles.length ? (
    <FlatList
      data={articles}
      renderItem={ArticleThumbnail}
      keyExtractor={articleUrlExtractor}
    />
  ) : (
    <View style={styles.noArticlesContainer}>
      <Text>Aucun article</Text>
    </View>
  );

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export { articleUrlExtractor };
export default ArticleList;
