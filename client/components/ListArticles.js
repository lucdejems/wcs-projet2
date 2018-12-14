import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withRouter } from 'react-router-native';
import firebase from 'firebase';
import ButtonCreateArticle from "./ButtonCreateArticle";
import CreateArticleModal from "./CreateArticleModal";

class ListArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  getCurrentUser = () => {
    const user = firebase.auth().currentUser;
    this.setState({
      user,
    });
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    return (
      <View>
        <Text> Bienvenue {this.state.user.displayName} !</Text>
        <ButtonCreateArticle />
        <CreateArticleModal />
      </View>
    )
  }
}

export default withRouter(ListArticles);
