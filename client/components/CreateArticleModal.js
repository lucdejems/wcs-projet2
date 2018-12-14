import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, TextInput, Modal, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { toggleUploadModal } from '../common/actions';
import { postArticle } from '../services/ArticleService';

class CreateArticleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleClick = (url) => {
    postArticle(url)
      .then(() => {
        this.props.toggleUploadModalAction()
      })
  }



  render() {
    const { isUploadModalOpen, toggleUploadModalAction } = this.props;
    const { inputText } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isUploadModalOpen}
          onRequestClose={toggleUploadModalAction}
        >
          <Text>Ajoutez un article à partir de son URL</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({ inputText: text })}
            value={inputText}
            placeholder={"Entrez l'URL de l'article"}
          />
          <Button onPress={this.handleClick(this.state.inputText)} title="add article" />
        </Modal>
      </View>
    );
  }
}

CreateArticleModal.propTypes = {
  toggleUploadModalAction: PropTypes.func.isRequired,
  isUploadModalOpen: PropTypes.bool,
};

CreateArticleModal.defaultProps = {
  isUploadModalOpen: true,
};

const mapStateToProps = state => ({
  isUploadModalOpen: state.isUploadModalOpen,
});

export default connect(
  mapStateToProps,
  { toggleUploadModalAction: toggleUploadModal }
)(CreateArticleModal);
