import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';

import ListArticles from './ListArticles';

describe('ListArticles', () => {
  it('renders Text', () => {
    const wrapper = shallow(<ListArticles />);
    expect(wrapper.find(Text));
  });
});
