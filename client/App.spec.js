import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';

import App from './App';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View));
  });
});

describe('within View', () => {
  it('renders Text with text "Aucun article"', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper
        .find('Text')
        .dive()
        .text()
    ).toEqual('Aucun article');
  });
});
