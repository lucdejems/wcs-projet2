import React from 'react';
import Modal from 'react-native';
import { shallow } from 'enzyme';

import AppModal from './AppModal';

describe('rendering AppModal', () => {
  it('renders Modal', () => {
    const wrapper = shallow(<AppModal />);
    expect(wrapper.dive.find(Modal));
  });
});
