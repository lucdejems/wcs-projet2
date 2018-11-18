import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';

const ArticleThumbnail = ({ item }) => (
  <Card
    image="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-300x200.jpg"
    title={item.title}
  >
    <Text>{item.source}</Text>
    <Text>{item.description}</Text>
  </Card>
);

ArticleThumbnail.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleThumbnail;
