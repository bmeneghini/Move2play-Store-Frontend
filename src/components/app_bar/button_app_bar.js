import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import GameNameInput from './../shared/game_name_input';
import Logo from './logo';
import './../../styles/app_bar.css';
import './../../styles/menu_app_bar.css';

class ButtonAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: ''
    }
  }

  componentDidMount() {
    this.setupStorage();
  }

  setupStorage = () => {
    let key = 'gameName';
    if (localStorage.hasOwnProperty(key)) {
      let value = localStorage.getItem(key);
      this.setState({ gameName: value });
    }
  }

  handleGameNameChange = (event) => {
    this.setState({ gameName: event.target.value });
    localStorage.setItem('gameName', event.target.value);
  }

  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }

  render() {
    return (
      <AppBar position="static" className={"divContainer"}>
        <div style={{ height: 70 }} />
        <Toolbar className={'button-app-toolbar'}>
          <Logo />
          <GameNameInput
            label={''}
            shrink={false}
            displaySearch={true}
            enableFullWidth={true}
            gameName={this.state.gameName}
            handleGameNameChange={this.handleGameNameChange}
          />
          <Button variant="outlined" color="inherit" onClick={this.login} className={"btnLogin"}>Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ButtonAppBar;