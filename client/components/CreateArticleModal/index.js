import React, { Component, Button, Input, Icon } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from 'components';

class CreateArticleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Modal
        animationType="fade"
        isOpen={this.state.modalVisible}
        onRequestClose={() => toggleModal(!this.state.modalVisible)}
      >
        <Icon />
        <Input />
        <Button />
      </Modal>
    );
  }
}

CreateArticleModal.prototype = {
  isOpen: PropTypes.bool,
};

CreateArticleModal.defaultProps = {
  isOpen: false,
};

export default CreateArticleModal;
