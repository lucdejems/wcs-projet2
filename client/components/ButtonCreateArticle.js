import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledComponents';

const ButtonCreateArticle = props => (
  <StyledButton
    onPress={props.onPress}
    title="Ajouter un Article"
    color="#841584"
  />
);

ButtonCreateArticle.prototype = {
  onPress: PropTypes.func,
};

ButtonCreateArticle.defaultProps = {
  onPress: { () => this.startCreateArticle() },
};

export default ButtonCreateArticle;
