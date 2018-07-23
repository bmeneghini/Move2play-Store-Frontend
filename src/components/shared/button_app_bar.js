import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import './button_app_bar'

const styles = {
  root: {
    flexGrow: 1,
    color: "#00885f",
    backgroundColor: "#fff",
    boxShadow: "0 4px 2px -2px #AAA"
  },
  autorizador: {
    flexGrow: 1,
    width: 117,
    height: 23,
    fontFamily: "Work Sans",
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 30,
    color: "#00885f !important",
    textDecoration: "none !important",
  },
  logo: {
    margin: 10,
    marginLeft: 50,
  },
  login: {
    height: 18,
    color: "#9b9b9b",
    fontFamily: "Work Sans",
    fontSize: 16,
    fontWeight: 400,
    textTransform: "uppercase",
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <img
            src="../images/logoCemigSaude.png"
            alt="logo cemig saude"
            className={classes.logo}
          />
          <Link
            variant="title"
            className={classes.autorizador}
            to="/">
            Autorizador
          </Link>
          <Button color="inherit" className={classes.login}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);