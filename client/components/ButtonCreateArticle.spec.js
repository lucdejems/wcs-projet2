import React from 'react';
import { shallow } from 'enzyme';

import ButtonCreateArticle from './ButtonCreateArticle';
import { StyledButton } from './StyledComponents';

describe('ButtonCreateArticle', () => {
  it('renders Button', () => {
    const wrapper = shallow(<ButtonCreateArticle />);
    expect(wrapper.find(StyledButton)).toHaveLength(1);
  });

  it('passes text "Ajouter un Article" as prop title to Button', () => {
    const wrapper = shallow(<ButtonCreateArticle />);
    expect(wrapper.prop('title')).toEqual('Ajouter un Article');
  });

  it('passes onPress function as prop onPress to Button', () => {
    const handlePress = () => null;
    const wrapper = shallow(<ButtonCreateArticle onPress={handlePress} />);
    expect(wrapper.prop('onPress')).toEqual(handlePress);
  });
});
