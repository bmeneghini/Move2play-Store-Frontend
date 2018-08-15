import React, { Component } from 'react';
import ButtonAppBar from './shared/button_app_bar'
import MenuAppBar from './shared/menu_app_bar'
import CarouselTrailers from './carousel_trailers'
import GameGenderFilterForm from './game_gender_filter_form'
import CustomLabel from './shared/custom_label'

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
        <CustomLabel content={"DESTAQUES E RECOMENDADOS"} font_size={25} text_align={"center"} height={100} />
        <GameGenderFilterForm />
        <CarouselTrailers />
      </div>
    );
  }
}

export default Home;