import React, { Component } from 'react';
import { connect } from "react-redux";
import ButtonAppBar from './shared/button_app_bar'
import MenuAppBar from './shared/menu_app_bar'
import CarouselTrailers from './carousel_trailers'
import GameGenderFilterForm from './game_gender_filter_form'
import CustomLabel from './shared/custom_label'
import { setUserCredentials } from './../actions' 

class Home extends Component {

  constructor(props) {
    super(props)
    this.isFetchingProfile = false;
  }

  componentDidUpdate() {
    const { getProfile, getAccessToken } = this.props.auth;
    const token = getAccessToken();
    if (!this.isFetchingProfile && token) {
      this.isFetchingProfile = true;
      getProfile((err, profile) => {
        this.props.setUserCredentials(profile);
      });
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
        <CustomLabel content={"DESTAQUES E RECOMENDADOS"} font_size={25} text_align={"center"} height={100} />
        <GameGenderFilterForm />
        
      </div>
    );
  }
}


export default connect(null, {setUserCredentials})(Home);