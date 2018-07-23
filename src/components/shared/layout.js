import React, { Component } from 'react'
import ButtonAppBar from './button_app_bar'
import CustomJumbotron from './custom_jumbotron'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <CustomJumbotron />
      </div>
    )
  }
}
