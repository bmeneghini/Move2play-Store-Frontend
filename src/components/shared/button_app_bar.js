import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import SearchBar from './search_bar'

const styles = {
  root: {
    flexGrow: 1,
    /*backgroundColor: "#2196F3",*/
    boxShadow: "0 4px 2px -2px #AAA",
    position: "relative",
  },
  /*
  move2play: {
    height: 23,
    fontFamily: "Work Sans",
    fontSize: 20,
    fontWeight: 700,
    color: "white !important",
    textDecoration: "none !important",
    margin: 10,
  },
  */
  logo: {
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  loginBtn: {
    color: "white",
    height: 18,
    fontFamily: "Work Sans",
    fontSize: 16,
    fontWeight: 400,
    textTransform: "uppercase",
    position: "absolute",
    right: 135,
  },
  registerBtn: {
    color: "white",
    height: 18,
    fontFamily: "Work Sans",
    fontSize: 16,
    fontWeight: 400,
    textTransform: "uppercase",
    position: "absolute",
    right: 10,
  },
};


class ButtonAppBar extends Component {

  render() {
    const { classes } = this.props
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Link to="/">
              <img
                src="../images/move2play-logo-tennis.png"
                alt="logo move2play"
                className={classes.logo}
                height="60"
              />
            </Link>
            <div>
              <SearchBar
                className="app_search_bar"
                fluid={true}
                size={"small"}
              />
            </div>
            <Button color="inherit" className={classes.loginBtn}>Login</Button>
            <Button color="inherit" className={classes.registerBtn}>Registrar</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);