import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchBar from './search_bar'
import Logo from './logo'

import './../../styles/app_bar.css'

class ButtonAppBar extends Component {

  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }

  render() {
    return (
      <div>
        <AppBar position="static" className={"divContainer"}>
          <Toolbar>
            <Logo />
            <SearchBar
              className="app_search_bar"
              fluid={true}
              size={"small"}
            />
            <div className={"divContainerInterno"} style={{ position: "absolute", right: "2%" }}>
              <div className={"divExterior"}>
                <div className={"divInterior"}>
                  <Button variant="outlined" color="inherit" onClick={this.login} className={"btnLogin"}>Login</Button>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default ButtonAppBar;