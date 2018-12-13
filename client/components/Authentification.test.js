import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';

import Authentification from './Authentification';

describe('Authentification', () => {
  it('renders View', () => {
    const wrapper = shallow(<Authentification />);
    expect(wrapper.find(View));
  });
});
