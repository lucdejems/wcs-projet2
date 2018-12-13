import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('renders View', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.find(View));
  });
});
