import React, { Component } from 'react';
import { connect } from "react-redux";
import ButtonAppBar from './app_bar/button_app_bar';
import MenuAppBar from './app_bar/menu_app_bar';
import _ from 'lodash';

import { setUserCredentials, postUserInformation } from './../actions'

class Home extends Component {

  constructor(props) {
    super(props)
    this.isFetchingProfile = false;
    this.hasSynchronized = false;
  }

  componentDidUpdate() {
    const { getProfile, getAccessToken } = this.props.auth;
    const token = getAccessToken();
    if (!this.isFetchingProfile && token) {
      this.isFetchingProfile = true;
      getProfile((err, profile) => {
        if (!_.isEmpty(profile)) {
          this.props.setUserCredentials(profile);
        }
      });
    }
  }

  buildUserDto = (profile) => {
    let userDto = {
      "id": profile.sub,
      "name": profile.name,
      "email": profile.email
    }
    return userDto;
  }

  synchroniseUserInformation = () => {
    const { getProfile } = this.props.auth;
    getProfile((err, profile) => {
      if (!_.isEmpty(profile)) {
        let user = this.buildUserDto(profile);
        this.props.postUserInformation(user);
      }
    });
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    let alreadyAuthenticated = isAuthenticated();

    if (alreadyAuthenticated && !this.hasSynchronized) {
      this.hasSynchronized = true;
      this.synchroniseUserInformation();
    }

    return (
      <div>
        {alreadyAuthenticated ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
        <h1 className={'home-title'}>Destaques e Recomendados</h1 >
      </div>
    );
  }
}


export default connect(null, { setUserCredentials, postUserInformation })(Home);