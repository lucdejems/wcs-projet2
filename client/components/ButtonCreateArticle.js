import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledComponents';

const ButtonCreateArticle = ({ onPress }) => (
  <StyledButton onPress={onPress} title="Ajouter un Article" color="#841584" />
);

ButtonCreateArticle.propTypes = {
  onPress: PropTypes.func,
};

ButtonCreateArticle.defaultProps = {
  onPress: () => {},
};

export default ButtonCreateArticle;
