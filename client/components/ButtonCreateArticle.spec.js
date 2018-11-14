import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-native';

import ButtonCreateArticle from './ButtonCreateArticle';

describe('rendering ButtonCreateArticle', () => {
  it('renders Button', () => {
    const wrapper = shallow(<ButtonCreateArticle />);
    expect(wrapper.find(Button));
  });
});

describe('within Button', () => {
  it('renders Text with text "Ajouter un Article"', () => {
    const wrapper = shallow(<Button />);
    expect(
      wrapper
        .find('Text')
        .dive()
        .text()
    ).toEqual('Ajouter un Article');
  });
});
