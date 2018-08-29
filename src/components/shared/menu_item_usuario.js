import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PermIdentity from '@material-ui/icons/PermIdentity';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Settings from '@material-ui/icons/SettingsOutlined';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './app_bar.css'

const styles = {
    userLabel: {
        height: 16,
        color: "white",
        fontFamily: "Work Sans",
        fontSize: 14,
        fontWeight: 400,
    },
    userArrow: {
        color: "white",
        width: 24,
        height: 24,
    },
    userIcon: {
        width: 30,
        height: 30,
        color: "white",
    },
    alignRight: {
        position: "absolute",
        float: "right",
        right: 0,
    },
    profileMenuIcon: {
        width: 25,
        height: 25,
        color: "black",
        marginRight: 10
    },
};

class MenuItemUsuario extends Component {
    state = {
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
        this.props.auth.logout();
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={"divContainerInterno"} style={{ /*position: "absolute", right: "2%"*/ }}>
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
                                            Usuário
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
                                    Perfil
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
        );
    }
}

export default withStyles(styles)(MenuItemUsuario);