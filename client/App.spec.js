import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import fetch from 'isomorphic-fetch';

import articles from './exampleData';
import ArticleList from './components/ArticleList';
import App from './App';

describe.skip('App', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify({ articles }));
  });

  it('renders View', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(View)).toHaveLength(1);
  });

  describe('within View', () => {
    describe('before articles have been fetched', () => {
      it('renders ArticleList with no articles', () => {
        const AppWrapper = shallow(<App />);

        expect(AppWrapper.find(ArticleList).prop('articles')).toEqual([]);
      });
    });

    describe('after articles have been fetched', () => {
      it('has requested the /articles resource', () => {
        shallow(<App />);

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(
          'https://server.com/api/articles'
        );
      });

      it('renders ArticleList with articles', done => {
        const AppWrapper = shallow(<App />);

        setTimeout(() => {
          expect(AppWrapper.find(ArticleList).prop('articles')).toEqual(
            articles
          );
          done();
        });
      });
    });
  });
});
