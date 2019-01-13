import React, { Component } from 'react';
import { connect } from "react-redux";
import ButtonAppBar from './app_bar/button_app_bar'
import MenuAppBar from './app_bar/menu_app_bar'
import GameGenderFilterForm from './game_gender_filter_form'
import CustomLabel from './shared/custom_label'
import CustomCoverflow from './custom_coverflow'
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
      if(!_.isEmpty(profile)){
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
        <CustomLabel content={"DESTAQUES E RECOMENDADOS"} font_size={25} text_align={"center"} height={100} />
        <GameGenderFilterForm />
        <CustomCoverflow />
      </div>
    );
  }
}


export default connect(null, { setUserCredentials, postUserInformation })(Home);