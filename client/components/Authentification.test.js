import React from 'react';
import { shallow } from 'enzyme';
import { View, Button } from 'react-native';
import firebase from "firebase";

import Authentification from './Authentification';

describe('Authentification', () => {
  it('renders View', () => {
    const wrapper = shallow(<Authentification />);
    expect(wrapper.find(View));
  });
});
