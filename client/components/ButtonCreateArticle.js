import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledButton } from './StyledComponents';

import { toggleUploadModal } from '../common/actions';

const ButtonCreateArticle = ({ toggleUploadModalAction }) => (
  <StyledButton
    onPress={toggleUploadModalAction}
    title="Ajouter un Article"
    color="#841584"
  />
);

ButtonCreateArticle.propTypes = {
  toggleUploadModalAction: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  { toggleUploadModalAction: toggleUploadModal }
)(ButtonCreateArticle);
