import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'react-native-elements';

import articles from '../exampleData';
import ArticleThumbnail from './ArticleThumbnail';

describe('ArticleThumbnail', () => {
  const article = articles[0];

  it('renders Card', () => {
    const ArticleThumbnailWrapper = shallow(
      <ArticleThumbnail item={article} />
    );

    expect(ArticleThumbnailWrapper.find(Card).prop('title')).toEqual(
      article.title
    );
  });
});
