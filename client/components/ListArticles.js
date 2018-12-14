import React, { Component } from 'react';
import { Text } from 'react-native';
import { withRouter } from 'react-router-native';
import firebase from 'firebase';

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
    return <Text> Bienvenue {this.state.user.displayName} !</Text>
  }
}

export default withRouter(ListArticles);
