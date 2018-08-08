import React, { Component } from 'react';
import ButtonAppBar from './shared/button_app_bar'
import MenuAppBar from './shared/menu_app_bar';

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() && (
            <MenuAppBar auth={this.props.auth}/>
          )
        }
        {
          !isAuthenticated() && (
            <ButtonAppBar auth={this.props.auth}/>
          )
        }
      </div>
    );
  }
}

export default Home;