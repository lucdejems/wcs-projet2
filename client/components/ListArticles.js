import React from 'react';
import { Text, View } from 'react-native';
import { withRouter } from 'react-router-native';

import { ButtonCreateArticle } from './ButtonCreateArticle';
import { CreateArticleModal } from './CreateArticleModal';

const ListArticles = () => (
  <View>
    <Text>Bienvenue sur ListArticles</Text>
    <ButtonCreateArticle />
    <CreateArticleModal />
  </View>
);

export default withRouter(ListArticles);
