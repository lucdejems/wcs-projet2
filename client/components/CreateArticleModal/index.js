import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from 'components';

const CreateArticleModal = () => (
  <Modal isOpen={isOpen} onRequestClose={() => toggleModal()} />
);

CreateArticleModal.prototype = {
  toggleModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

CreateArticleModal.defaultProps = {
  toggleModal: false,
  isOpen: false,
};
