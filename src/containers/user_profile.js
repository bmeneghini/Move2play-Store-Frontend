import React, { Component } from 'react'
import ButtonAppBar from './../components/shared/button_app_bar'
import MenuAppBar from './../components/shared/menu_app_bar'

export default class UserProfile extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
      </div>
    )
  }
}
