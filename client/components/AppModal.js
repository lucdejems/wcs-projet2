import React, { Component, Icon } from 'react';
import PropTypes from 'prop-types';

import { TextInput, Modal, Button } from 'react-native';
import { connect } from 'react-redux';
import { toggleUploadModal} from '../common/actions'
import {bindActionCreators} from "redux";

class CreateArticleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  render() {
    const { isUploadModalOpen, toggleUploadModalAction} = this.props;
    return (
      <Modal
        animationType="fade"
        visible={isUploadModalOpen}
        onRequestClose={toggleUploadModalAction}
      >
        <Icon />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.inputText}
        />
        <Button onPress={} title="add article"/>
      </Modal>
    );
  }
}

CreateArticleModal.prototype = {
  toggleUploadModalAction: PropTypes.func.isRequired,
  isUploadModalOpen: PropTypes.bool,
};

CreateArticleModal.defaultProps = {
  toggleUploadModalAction: () => {},
  isUploadModalOpen: true,
};

const mapStateToProps = state => {
  return {
    isUploadModalOpen: state.isUploadModalOpen,
  };
};

export default connect(mapStateToProps, { toggleUploadModalAction: toggleUploadModal})(CreateArticleModal);
