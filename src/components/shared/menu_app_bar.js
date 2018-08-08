import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PermIdentity from '@material-ui/icons/PermIdentity';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Settings from '@material-ui/icons/SettingsOutlined';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from './logo'
import SearchBar from './search_bar'

import './app_bar.css'

const styles = {
    userLabel: {
        height: 16,
        color: "#9b9b9b",
        fontFamily: "Work Sans",
        fontSize: 14,
        fontWeight: 400,
    },
    userArrow: {
        color: "#9b9b9b",
        width: 24,
        height: 24,
    },
    userIcon: {
        width: 41,
        height: 41,
        color: "#9b9b9b",
    },
    alignRight: {
        position: "absolute",
        float: "right",
        right: 0,
    },
    profileMenuIcon: {
        width: 25,
        height: 25,
        color: "#9b9b9b",
    },
};

class MenuAppBar extends Component {
    user_info;
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = (event) => {
        event.preventDefault();
        // calls the logout method in authentication service
        this.props.auth.logout();
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        /*user ?
          this.user_info = `${user.profile.given_name} ${user.profile.family_name}` :
          this.user_info = `Usuário`*/

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
                                    <div style={{ height: 50 }}>
                                        <div className={"divContainerInterno"}>
                                            <div className={"divExterior"}>
                                                <div className={"divInterior"}>
                                                    <PermIdentity className={classes.userIcon} onClick={this.handleMenu} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"divContainerInterno"}>
                                            <div className={"divExterior"}>
                                                <div className={"divInterior"}>
                                                    <label
                                                        aria-owns={open ? 'menu-appbar' : null}
                                                        aria-haspopup="true"
                                                        onClick={this.handleMenu}
                                                        className={classes.userLabel}
                                                    >
                                                        {//this.user_info
                                                        }
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"divContainerInterno"}>
                                            <div className={"divExterior"}>
                                                <div className={"divInterior"}>
                                                    <KeyboardArrowDown className={classes.userArrow} onClick={this.handleMenu} style={{ height: 50 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={this.handleClose}
                                        >
                                            <MenuItem
                                                onClick={this.handleClose}>
                                                <Settings className={classes.profileMenuIcon} />
                                                Profile
                                            </MenuItem>
                                            <MenuItem
                                                onClick={this.handleLogout}>
                                                <ExitToApp className={classes.profileMenuIcon} />
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);