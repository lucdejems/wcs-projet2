import React from 'react';
import { shallow } from 'enzyme';
import { FlatList, Text, View } from 'react-native';

import articles from '../exampleData';
import ArticleThumbnail from './ArticleThumbnail';
import ArticleList, { articleUrlExtractor } from './ArticleList';

describe('ArticleList', () => {
  describe('when passed no articles', () => {
    const noArticles = [];

    it('renders View and Text with text "Aucun article"', () => {
      const ArticleListWrapper = shallow(<ArticleList articles={noArticles} />);

      expect(
        ArticleListWrapper.find(View)
          .find(Text)
          .dive()
          .text()
      ).toEqual('Aucun article');
    });
  });

  describe('when passed articles', () => {
    it('renders FlatList with articles', () => {
      const ArticleListWrapper = shallow(<ArticleList articles={articles} />);

      const FlatListWrapper = ArticleListWrapper.find(FlatList);
      expect(FlatListWrapper.prop('data')).toEqual(articles);
      expect(FlatListWrapper.prop('renderItem')).toEqual(ArticleThumbnail);
      expect(FlatListWrapper.prop('keyExtractor')).toEqual(articleUrlExtractor);
    });
  });
});
