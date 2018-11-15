import React, { Fragment } from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';

const AppModal = ({ onRequestClose, isOpen, children }) => {
  return (
    <Fragment>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Modal"
      >
        {children}
      </Modal>
    </Fragment>
  );
};

AppModal.prototype = {
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.any,
};

AppModal.defaultProps = {
  onRequestClose: () => {},
  isOpen: false,
  children: null,
};

export default AppModal;
